
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
    closeIcon.style.display = 'none';
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
    playlist.innerHTML = '<p>Your Playlist is Empty</p><p> <a href="index.html"><i class="fas fa-plus-circle"></i>Explore Songs</a></p>'
    //playlist.innerHTML.style.color = 'red'
    
}


function buscarYMostrarFavoritos(id){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
       //let info = data.data;
       //let resultados = '';
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