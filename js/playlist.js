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

/*PLAYLIST*/

/*let recuperoStorage = localStorage.getItem('favoritos')

let favoritos = JSON.parse(recuperoStorage)

let playlist = document.querySelector('.playlist'); 

//recorriendo array de favoritos 
for (let i=0; i<favoritos.length; i++){
     
}

let url =  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`; 

fetch(url)


    .then( function(response){
        return response.json();
    })
    .then( function(data){
        let info = data.data; 
        let resultados = ''; 
        playlist.innerHTML +=
                            `<li>
                                    <img src="${info.images.original.url}" alt="Portada de 'Location'">
                                    <div>
                                    <h5><a href="detail-track.html"></a>${info[i].id}</h5>
                                    <p><a href="detail-artist.html">- Khalid</a></p>
                                    </div>
                            </li>`

    })
    .catch( function(error){
        console.log(error);
    })
*/
let recuperoDatosStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoDatosStorage);

let playlist = document.querySelector('.lista-playlist');

//hacer texto 'your playlist is empty' explore songs (y que me lleve a index)

//if(favoritos == null){
  //  playlist.innerHTML += '<p>Your Playlist is Empty</p><p> <a href="index.html">Explore Songs</a></p>'
//}
for (let i=0; i<favoritos.length; i++){
    buscarYMostrarFavoritos(favoritos[i]);
   
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
                                   <img src="${data.album.cover_big}" alt="Portada de 'Location'">
                                   <div>
                                     <h5><a href="detail-track.html?id=${data.id}">${data.title}</a></h5>
                                     <p><a href="detail-artist.html?id=${data.artist.id}">- ${data.artist.name}</a></p>
                                   </div>
                                 </li> `
                                 
    })
    .catch( function(error){
      console.log(error);
    })

}
