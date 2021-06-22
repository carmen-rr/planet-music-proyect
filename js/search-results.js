window.addEventListener('load', function(){
      let loader = document.querySelector('.gif')
      loader.style.display = 'none';
      let main = document.querySelector('.main-results')
      main.style.display = 'flex';
    
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

    if(arrayInfo.length>0){

        let searchArtist = document.querySelector('.result-artist');
        let resultArtist = '';
        for (let i=0; i<3; i++){
           resultArtist += `<li>
                              <img src="${arrayInfo[i].picture_big}" alt="Image ${search}"> 
                              <h4><a href="detail-artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>
                            </li>`
        }
        searchArtist.innerHTML += resultArtist;
    }else{
        let noHayResultadosArtist = document.querySelector('.result-artist')
        noHayResultadosArtist.innerHTML= `<h4 class="no-results">There isn't any artist for '${search}'</h4>`;
    }
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

    if(arrayInfo.length>0){
        let searchSongs = document.querySelector('.result-songs');
        let resultSongs = '';
        for (let i=0; i<5; i++){
            resultSongs += `<li>
                               <img src="${arrayInfo[i].album.cover_big}" alt="Portada 'We're Good'">
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
    }
})
.catch( function(error){
    console.log(error);
  })

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
                                 <img src="${arrayInfo[i].cover_big}" alt="Portada 'Future Nostalgia'">
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
    }
})
.catch( function(error){
    console.log(error);
  })

let playlistBuscada = document.querySelector('.playlist')
let hola1 = playlistBuscada.innerText += ` '${search}'...`;

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
                                 <img src="${arrayInfo[i].picture_big}" alt="Portada playlist 'Top 5 Songs'">
                                 <h4><a href="index.html">${arrayInfo[i].title}</a></h4>
                               </li>`
        }
        searchPlaylist.innerHTML += resultPlaylist;
    }else{
        let noHayResultadosPlaylist = document.querySelector('.result-playlist')
        noHayResultadosPlaylist.innerHTML= `<h4 class="no-results">There isn't any playlist for '${search}'</h4>`;
        let textoNoResults = document.querySelector('.no-results')
        textoNoResults.style.fontSize = '50px';
        //textoNoResults.style.width = '100%';
        //textoNoResults.style.display = 'flex';
       // textoNoResults.style.justifyContent = 'center';
    
    }
})
.catch( function(error){
    console.log(error);
  })


//}else{
    //palabraBuscada.innerText = `There aren't results for '${search}'`;
    
    //let noHayResultados = document.querySelector('.search-result')
    //noHayResultados.style.display = "none";

//}