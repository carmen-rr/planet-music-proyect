window.addEventListener('load', function(){
      let loader = document.querySelector('iframe');
      loader.style.display = 'none';
    
})
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let search = queryStringToObject.get('search')

let palabraBuscada = document.querySelector('h2')
let hola = palabraBuscada.innerText += ` '${search}'`;

let urlArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${search}`

fetch (urlArtist)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data)
    let arrayInfo = data.data;
    let searchArtist = document.querySelector('.result-artist');
    let resultArtist = '';
    for (let i=0; i<3; i++){
        resultArtist += `<li>
                           <img src="${arrayInfo[i].picture_big}" alt="Image ${search}"> 
                           <h4><a href="detail-artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>
                         </li>`
    }
    searchArtist.innerHTML += resultArtist;
})
.catch( function(error){
    console.log(error);
  })

let urlTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${search}`

fetch (urlTrack)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data)
    let arrayInfo = data.data;
    let searchSongs = document.querySelector('.result-songs');
    let resultSongs = '';
    for (let i=0; i<5; i++){
        resultSongs += `<li>
        <img src="${arrayInfo[i].album.cover_big}" alt="Portada 'We're Good'">
        <div>
          <h4><a href="detail-track.html?id=${arrayInfo[i].id}">We're Good</a></h4>
          <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}">${arrayInfo[i].artist.name}</a></p>
        </div>
     </li>`
    }
    searchSongs.innerHTML += resultSongs;
})
.catch( function(error){
    console.log(error);
  })
