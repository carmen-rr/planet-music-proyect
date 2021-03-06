//LOADER
window.addEventListener('load', function(){
      let loader = document.querySelector('.gif')
      loader.style.display = 'none';
      let body = document.querySelector('.body-search-results')
      body.style.display = 'block';
    
})
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

        let searchArtist = document.querySelector('.result-artist');

    if(arrayInfo.length>0){

        let resultArtist = '';
        for (let i=0; i<3; i++){
           resultArtist += `<li>
                              <img src="${arrayInfo[i].picture_big}" alt="Image of ${arrayInfo[i].name}"> 
                              <h4><a href="detail-artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>
                            </li>`
        }
        searchArtist.innerHTML += resultArtist;
    }else{
       searchArtist.innerHTML= `<h4 class="no-results">There isn't any artist for '${search}'</h4>`;

        decoracionTextosNoResults();
        
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

        decoracionTextosNoResults();
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

        decoracionTextosNoResults();
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

        decoracionTextosNoResults();
    
    }
})
.catch( function(error){
    console.log(error);
  })



    function decoracionTextosNoResults(){
    let noResults = document.querySelector('.no-results')
    noResults.style.fontSize = '25px';
    noResults.style.color = 'rgba(255, 255, 255, 0.6)'; 
    noResults.style.fontWeight = '200';
    noResults.style.padding = '10px';
    noResults.style.width = '100%';
    noResults.style.textAlign = 'center'

}