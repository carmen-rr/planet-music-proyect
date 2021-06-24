
/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search]')
let closeIcon = document.querySelector('.closeIcon')
let alerta1 = document.querySelector('.probando1')
let alerta2 = document.querySelector('.probando2')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline';
        alerta1.style.display = 'flex';
        //document.querySelector('.probando').innerText = "The field can't be empty"
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline';
        alerta2.style.display = 'flex';
        //document.querySelector('.probando').innerText = "You should enter at least three characters"
    }
    else {this.submit()}

})

  campoBuscar.addEventListener('input', function(){
  closeIcon.style.display = 'none';
  alerta1.style.display = 'none';
  alerta2.style.display = 'none';
  //document.querySelector('.probando').style.display = 'none'

})

/*ALBUM*/

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

 
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`; 
let urlSongsAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`
 

fetch(url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data);
   
    let banner = document.querySelector('.banner-detail-album')
        banner.innerHTML = `<img class="banner-album" src="${data.cover_xl}" >
                            <img class="banner-album-responsive" src="${data.cover_xl}" >`

    /*ALBUM TITLE*/
    let album = document.querySelector('h1')
    album.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.title} </a>`
   
    /*ALBUM ARTIST*/
    let artist = document.querySelector('.detalles-album')
    artist.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name} </a>`  

    /*TITLE DE PESTAÑA*/
    let title = document.querySelector('title')
    title.innerText = data.title

    /*ALBUM IMAGEN*/
    let img = document.querySelector('.fotoalbum')
    img.src = data.cover_big

    /*SONGS*/
    fetch (urlSongsAlbum)
     .then( function(response){
      return response.json();
    })
    .then( function(data){
      console.log(data)
      let arrayInfo = data.data;
      let lista = document.querySelector('.songs-album');
      let contenidoLista =''; 
      for(let i=0; i<arrayInfo.length; i++){
        contenidoLista += 
               `<li><a href="detail-track.html?id=${arrayInfo[i].id}"> ${arrayInfo[i].title}</a></li>`
      }
      
    lista.innerHTML += contenidoLista;
    })
   .catch( function(error){
      console.log(error);
    })

    /*DATE*/
    let date = document.querySelector('h6')
    date.innerText = data.release_date

    /*GENRE*/
    let arrayInfo = data.genres.data
    let genres = document.querySelector('.genres-album');
    let contenidoLista =''; 

    for(let i=0; i<arrayInfo.length; i++){
       contenidoLista += 
       `<h3 class="genres-album" ><a href="detail-genres.html?id=${arrayInfo[i].id}"> ${arrayInfo[i].name} </a></h3>`
                }

   genres.innerHTML += contenidoLista;


})
.catch( function(error){
  console.log(error);
})

