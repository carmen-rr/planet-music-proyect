/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search')
let closeIcon = document.querySelector('.closeIcon')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline';
        document.querySelector('.probando').innerText = "The field can't be empty"
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline';
        document.querySelector('.probando').innerText = "You should enter at least three characters"
    }
    else {this.submit()}

})

campoBuscar.addEventListener('input', function(){
    closeIcon.style.display = 'none';
})

//ARTIST

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')


let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

        //banner
        let banner = document.querySelector('.banner-detail-artist')
        banner.innerHTML = `<img class="banner-artist" src="${data.picture_xl}" >
                            <img class="banner-artist-responsive" src="${data.picture_xl}" >`

        //nombre artista
        let artist = document.querySelectorAll('h1')
           //console.log(artist)
        artist[1].innerText = data.name
        artist[0].innerText = data.name
           //console.log(data.name)

        //portada artista
        let image = document.querySelector('.img-miley')
        image.src = data.picture_big
        image.alt = alt=`Image of ${data.name}`

        //portada artista responsive
        let imageResponsive = document.querySelector('.img-miley-responsive')
        imageResponsive.src = data.picture_big
        imageResponsive.alt = `Image of ${data.name}`
        

    })
    .catch( function(error){
      console.log(error);
    })


//Popular Songs:
let urlTopSongs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top` 

    fetch (urlTopSongs)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data)

            let arrayInfo = data.data;
            let lista = document.querySelector('.popular-songs');
            let contenidoLista =''; 
     
            for(let i=0; i<arrayInfo.length; i++){
               contenidoLista += 
                      `<li><a href="detail-track.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></li>`
            }
            lista.innerHTML += contenidoLista;
        })
        .catch( function(error){
            console.log(error);
          })

//Artist Albums:
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
        
fetch(urlAlbum)
          .then( function(response){
              return response.json();
          })
          .then( function(data){
      
             console.log(data); 
      
             let arrayInfo = data.data;
             console.log(arrayInfo)
             let lista = document.querySelector('.artist-albums');
             let contenidoLista =''; 
      
             for(let i=0; i<5; i++){
                contenidoLista += 
                       `<li>
                         <a href="detail-album.html?id=${arrayInfo[i].id}"><img src="${arrayInfo[i].cover_big}" alt="Image of ${arrayInfo[i].title} Album"></a>
                         <div class="contenedor-albumes-da">
                            <h4><a href="detail-album.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></h4>
                         </div>
                       </li>`
             }
             
             lista.innerHTML += contenidoLista;
            
          })
          .catch( function(error){
            console.log(error);
          })