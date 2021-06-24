/*FORMULARIO*/

let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search]')
let closeIcon = document.querySelector('.closeIcon')
let alerta1 = document.querySelector('.probando1')
let alerta2 = document.querySelector('.probando2')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline-block';
       alerta1.style.display = 'flex';
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline-block';
       alerta2.style.display = 'flex';
    }
    else {this.submit()}

})

campoBuscar.addEventListener('input', function(){
closeIcon.style.display = 'none';
alerta1.style.display = 'none';
alerta2.style.display = 'none';
})


//DETAIL-TRACK

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

        //banner
        let banner = document.querySelector('.banner-detail-track')
        banner.innerHTML = `<img class="banner-track" src="${data.album.cover_xl}">
                            <img class="banner-track-responsive" src="${data.album.cover_xl}" >`

        //nombre cancion
        let song = document.querySelector('h1')
        song.innerText = data.title

        //title de pestaña
        let title = document.querySelector('title')
        title.innerText = data.title
    
        //nombre album
        let album = document.querySelector ('.album-detail-track')
        album.innerHTML = `<a href="detail-album.html?id=${data.album.id}">${data.album.title} </a>`

        //nombre artista
        let artist = document.querySelector ('h3')
        artist.innerHTML = `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`

        //portada cancion
        let imagen = document.querySelector ('.img-dua')
        imagen.src = data.album.cover_big
        imagen.alt = `Image of ${data.title} Song`

        //player 
        let player = document.querySelector('.player-deezer')
        player.innerHTML = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="1050" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
       

    })
    .catch( function(error){
      console.log(error);
    })


//AGREGAR A PLAYLIST

let favoritos = [];

let recuperoDatosStorage = localStorage.getItem('favoritos');

if(recuperoDatosStorage != null){
    favoritos = JSON.parse(recuperoDatosStorage);
}

if(favoritos.includes(id)){
    let texto = document.querySelector('.add-playlist');
    texto.innerText = 'Remove from Playlist';
}


let fav = document.querySelector('.add-playlist')

fav.addEventListener ('click', function(){
    if(favoritos.includes(id)){

        let quitoId = favoritos.indexOf(id);
        favoritos.splice(quitoId, 1);

        let textoAgregar = document.querySelector('.add-playlist');
        textoAgregar.innerText = 'Add to Playlist'

    }else{
        favoritos.push(id)

        let textoSacar = document.querySelector('.add-playlist');
        textoSacar.innerText = 'Remove from Playlist'
    
    }
  
  let favParaStorage = JSON.stringify(favoritos)
  localStorage.setItem ('favoritos', favParaStorage);
  console.log(localStorage)
})