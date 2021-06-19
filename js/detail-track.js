/*FORMULARIO*/

let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search')

let closeIcon = document.querySelector('.closeIcon')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline';
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline';
    }
    else {this.submit()}

})

campoBuscar.addEventListener('input', function(){
    alert.innerText = ''
    closeIcon.style.display = 'none';
})


/*TRACK*/

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
        let song = document.querySelector('h1')
        song.innerText = data.title
    
        let album = document.querySelector ('.album-detail-track')
        album.innerHTML = `<a href="detail-album.html?id=${data.album.id}">${data.album.title} </a>`

        let artist = document.querySelector ('h3')
        artist.innerHTML = `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`

        let imagen = document.querySelector ('.img-dua')
        imagen.src = data.album.cover_big

        let player = document.querySelector('iframe')
       // player.src = `https://widget.deezer.com/widget/dark/playlist/${id}data.preview`
       player.src = `https://www.deezer.com/us/track/${id}`

    })
    .catch( function(error){
      console.log(error);
    })


/*AGREGAR A PLAYLIST*/

let favoritos = []; 

//recuperar datos del storage 
let recuperoStorage = localStorage.getItem('favoritos'); 

if (recuperoStorage != null){
  favoritos = JSON.parse(recuperoStorage); 

}

if (favoritos.includes(id)){
document.querySelector('.add-playlist').innerText = "Remove from Playlist"
}

let fav = document.querySelector('.add-playlist')
console.log(fav)

fav.addEventListener('click', function(event){
  event.preventDefault();

//preguntando si el id esta en el array 
if (favoritos.includes(id)){
    let idSacar = favoritos.indexOf(id); 
    favoritos.splice(idSacar, 1); 
    document.querySelector('.add-playlist').innerText = "Add to Playlist"
}else {
  //guardando id en array 
     favoritos.push (id); 
     console.log(favoritos)
     document.querySelector('.add-playlist').innerText = "Remove from Playlist"
}

     let favParaStorage = JSON.stringify(favoritos)
    localStorage.setItem('favoritos', favParaStorage); 
     console.log(localStorage)


})