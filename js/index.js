
let urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks'

fetch(urlTrack)
    .then( function(response){
        return response.json();
    })
    .then( function(data){

       console.log(data);
       let arrayInfo = data.data;
       let lista = document.querySelector('.ul-de-songs');
       let contenidoLista =''; 

       for(let i=0; i<arrayInfo.length; i++){
          contenidoLista += 
                 `<li>
                <img src="${arrayInfo[i].album.cover_big}"> 
                <div class="text"> 
                    <h5><a href="detail-track.html?id=${arrayInfo[i].id}"> ${arrayInfo[i].title}</a> </h5>
                    <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}"> - ${arrayInfo[i].artist.name}</a></p>
               </div>
               </li>`
       }

      lista.innerHTML += contenidoLista;


    })
    .catch( function(error){
      console.log(error);
    })

    let urlAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums'

    fetch(urlAlbum)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        
        console.log(data);
       let arrayInfo = data.data;
       let lista = document.querySelector('.ul-de-albums');
       let contenidoLista =''; 

       for(let i=0; i<arrayInfo.length; i++){
          contenidoLista += 
                              `<li>
                    <img src="${arrayInfo[i].cover_big}">
                    <div class="text">
                        <h5><a href="detail-album.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></h5>
                        <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}">- ${arrayInfo[i].artist.name}</a></p>
                    </div>
                </li>`

       }
      lista.innerHTML += contenidoLista;


    })
    .catch( function(error){
      console.log(error);
    })


    let urlArtist = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists'

    fetch(urlArtist)
    .then( function(response){
        return response.json();
    })
    .then( function(data){

        console.log(data);
        let arrayInfo = data.data;
       let lista = document.querySelector('.ul-de-artist');
       let contenidoLista =''; 

      for(let i=0; i<arrayInfo.length; i++){
          contenidoLista += 
                  
                `<li>
                    <img src="${arrayInfo[i].picture_big}">
                    <div class="text">
                        <h5><a href="detail-artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h5>
                    </div>
                </li>`

       }
   lista.innerHTML += contenidoLista;


    })
    .catch( function(error){
      console.log(error);
    })

  
