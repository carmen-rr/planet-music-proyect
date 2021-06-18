let = queryString = location.search;
let = queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

 
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`; 
let urlSongsAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`
 

fetch(url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data);

    /*ALBUM TITLE*/
    let album = document.querySelector('h1')
    album.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.title} </a>`
   
    /*ALBUM ARTIST*/
    let artist = document.querySelector('.detalles-album')
    artist.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name} </a>`  

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
              `<h3 class="genres-album?id=${arrayInfo[i].id}"> ${arrayInfo[i].name}</h3>`
             // `<a href="detail-genres.html?id=${genres.data.id}"> <h3 class="genres-album?id=${arrayInfo[i].id}"> ${arrayInfo[i].name}</h3> </a>`  
    }

   genres.innerHTML += contenidoLista;


})
.catch( function(error){
  console.log(error);
})

