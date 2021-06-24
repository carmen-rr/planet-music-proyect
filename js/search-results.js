//LOADER
window.addEventListener('load', function(){
      let loader = document.querySelector('.gif')
      loader.style.display = 'none';
      let body = document.querySelector('.main-results')
      body.style.display = 'flex';
    
})
//FORMULARIO 
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search]')
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
    document.querySelector('.probando').style.display = 'none';
})



//SEARCH-RESULTS

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let search = queryStringToObject.get('search')





let palabraBuscada = document.querySelector('h2')
let comentario = palabraBuscada.innerText += ` '${search}'`;



//Resultados Artistas:
let urlArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${search}`

fetch (urlArtist)
.then( function(response){
    return response.json();
})
.then( function(data){


        console.log(data)
        let arrayInfo = data.data;

    if(arrayInfo.length>0){

        let searchArtist = document.querySelector('.result-artist');
        let resultArtist = '';
        for (let i=0; i<3; i++){
           resultArtist += `<li>
                              <img src="${arrayInfo[i].picture_big}" alt="Image of ${arrayInfo[i].name}"> 
                              <h4><a href="detail-artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>
                            </li>`
        }
        searchArtist.innerHTML += resultArtist;
    }else{
        let noHayResultadosArtist = document.querySelector('.result-artist')
        noHayResultadosArtist.innerHTML= `<h4 class="no-results">There isn't any artist for '${search}'</h4>`;

        let noResults = decoracionTextosNoResults();
        
    }
})
.catch( function(error){
    console.log(error);
  })






//Resultados Tracks:
let urlTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${search}`

fetch (urlTrack)
.then( function(response){
    return response.json();
})
.then( function(data){
       console.log(data)
       let arrayInfo = data.data;

    if(arrayInfo.length>0){
        let searchSongs = document.querySelector('.result-songs');
        let resultSongs = '';
        for (let i=0; i<5; i++){
            resultSongs += `<li>
                               <img src="${arrayInfo[i].album.cover_big}" alt="Image of ${arrayInfo[i].title} Song">
                               <div>
                                  <h4><a href="detail-track.html?id=${arrayInfo[i].id}"> ${arrayInfo[i].title}</a></h4>
                                  <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}">${arrayInfo[i].artist.name}</a></p>
                               </div>
                            </li>`
        }
        searchSongs.innerHTML += resultSongs;
    }else{
        let noHayResultadosSong = document.querySelector('.result-songs')
        noHayResultadosSong.innerHTML= `<h4 class="no-results">There isn't any song for '${search}'</h4>`;

        let noResults = decoracionTextosNoResults();
    }
})
.catch( function(error){
    console.log(error);
  })





//Resultados Album:
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${search}`

fetch (urlAlbum)
.then( function(response){
    return response.json();
})
.then( function(data){
        console.log(data)
        let arrayInfo = data.data;

    if(arrayInfo.length>0){
        let searchAlbums = document.querySelector('.result-albums');
        let resultAlbums = '';
        for (let i=0; i<3; i++){
             resultAlbums += `<li>
                                 <img src="${arrayInfo[i].cover_big}" alt="Image of ${arrayInfo[i].title} Album">
                                 <div>
                                   <h4><a href="detail-album.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></h4>
                                   <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}">${arrayInfo[i].artist.name}</a></p>
                                 </div>
                              </li>`
        }
        searchAlbums.innerHTML += resultAlbums;
    }else{
        let noHayResultadosAlbum = document.querySelector('.result-albums')
        noHayResultadosAlbum.innerHTML= `<h4 class="no-results">There isn't any album for '${search}'</h4>`;

        let noResults = decoracionTextosNoResults();
    }
})
.catch( function(error){
    console.log(error);
  })

let playlistBuscada = document.querySelector('.playlist-search')
let hola1 = playlistBuscada.innerText += ` '${search}'...`;





//Resultados Playlist:
let urlPlaylist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=${search}`

fetch (urlPlaylist)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data)
    let arrayInfo = data.data;
    if(arrayInfo.length>0){
        let searchPlaylist = document.querySelector('.result-playlist');
        let resultPlaylist = '';
        for (let i=0; i<3; i++){
            resultPlaylist += `<li>
                                 <img src="${arrayInfo[i].picture_big}" alt="Image of ${arrayInfo[i].title} Playlist">
                                 <h4><a href="index.html">${arrayInfo[i].title}</a></h4>
                               </li>`
        }
        searchPlaylist.innerHTML += resultPlaylist;
    }else{
        let noHayResultadosPlaylist = document.querySelector('.result-playlist')
        noHayResultadosPlaylist.innerHTML= `<h4 class="no-results">There isn't any playlist for '${search}'</h4>`;

        let noResults = decoracionTextosNoResults();
    
    }
})
.catch( function(error){
    console.log(error);
  })



 let funcion = function decoracionTextosNoResults(){
    let noResults1 = document.querySelector('.no-results')
    noResults1.style.fontSize = '25px';
    noResults1.style.color = 'rgba(255, 255, 255, 0.6)'; 
    noResults1.style.fontWeight = '200';
    noResults1.style.padding = '10px';
    noResults1.style.width = '100%';
    noResults1.style.textAlign = 'center'

}