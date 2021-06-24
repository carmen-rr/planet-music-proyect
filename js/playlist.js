
//FORMULARIO
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

//PLAYLIST

let recuperoDatosStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoDatosStorage);

let playlist = document.querySelector('.lista-playlist');

if (favoritos.length>0 || recuperoDatosStorage.favoritos != undefined){
    for (let i=0; i<favoritos.length; i++){
        buscarYMostrarFavoritos(favoritos[i]);
       
    }
   
    
}else{
    playlist.innerHTML = '<p class="empty-playlist">Your Playlist is Empty</p><p class="explore-songs"> <a href="index.html"><i class="fas fa-plus-circle"></i>Explore Songs</a></p>'
    let p1 = document.querySelector('.empty-playlist')
    p1.style.fontSize = '30px';
    p1.style.color = 'rgba(255, 255, 255, 0.6)';
    p1.style.fontWeight = '200';

    let p2 = document.querySelector('.explore-songs')
    p2.style.fontSize = '30px';
    p2.style.marginLeft = '50px';
    p2.style.color = 'rgba(255, 255, 255, 0.6)';
    p2.style.fontWeight = '200';
    
    let icon = document.querySelector('.fa-plus-circle')
    icon.style.marginRight = '5px'
}


function buscarYMostrarFavoritos(id){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
       playlist.innerHTML +=   ` <li>
                                   <img src="${data.album.cover_big}" alt="Image of ${data.title} Song">
                                   <div>
                                     <h5><a class= "link-playlist" href="detail-track.html?id=${data.id}">${data.title}</a><a href="detail-track.html?id=${data.id}"><i class="fas fa-trash"></i></a></h5>
                                     <p><a href="detail-artist.html?id=${data.artist.id}">- ${data.artist.name}</a></p>
                                   </div>
                                 </li> `
                                 
    })
    .catch( function(error){
      console.log(error);
    })

}