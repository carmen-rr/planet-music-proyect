let = queryString = location.search;
let = queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

 
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`; 
 

fetch(url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data);

    let album = document.querySelector('h1')
    album.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.title} </a>`
    //album.innerText = data.title 

    let artist = document.querySelector('.detalles-album')
    artist.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name} </a>`  

    let img = document.querySelector('.fotoalbum')
    img.src = data.cover_big

    //let songs = document.querySelector('li')
    //songs.src = data.tracks.data.title

    let date = document.querySelector('h6')
    date.innerText = data.release_date

    //let genres = document.querySelector('.genres-album')
    //genres.innerText = data.genres.data.name
    let arrayInfo = data.genres.data
    let genres = document.querySelector('.genres-album');
    let contenidoLista =''; 

    for(let i=0; i<arrayInfo.length; i++){
       contenidoLista += 
              `<h3 class="genres-album?id=${arrayInfo[i].id}"> ${arrayInfo[i].name}</h3>`
    }

   genres.innerHTML += contenidoLista;




})
.catch( function(error){
  console.log(error);
})

