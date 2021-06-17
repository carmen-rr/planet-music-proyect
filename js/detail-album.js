let = querylString = location.search;
let = queryStringToObject = new URLSearchParams(querylString);
let id = queryStringToObject.get('id');

 
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`; 
 

fetch(url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data);

    let album = document.querySelector('h1')
    album.innerText = data.title 

    let artist = document.querySelector('.detalles-album')
    artist.innerHTML =  `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name} </a>`  

    let img = document.querySelector('.fotoalbum')
    img.src = data.cover_big

    //let songs = document.querySelector('li')
    //songs.src = data.tracks.data.title

    let date = document.querySelector('h6')
    date.innerText = data.release_date

    let genres = document.querySelector('.genres-album')
    genres.innerText = data.genres.data.name

})
.catch( function(error){
  console.log(error);
})

