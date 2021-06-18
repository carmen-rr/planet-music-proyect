let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
        let song = document.querySelector('h1')
        song.innerText = data.title
    
        let album = document.querySelector ('.album-detail-track')
        album.innerHTML = `<a href="detail-album.html?id=${data.album.id}">${data.album.title} </a>`

        let artist = document.querySelector ('h3')
        artist.innerHTML = `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`

        let imagen = document.querySelector ('.img-dua')
        imagen.src = data.album.cover_big

        let player = document.querySelector('iframe')
       // player.src = `https://widget.deezer.com/widget/dark/playlist/${id}data.preview`
       player.src = `https://www.deezer.com/us/track/${id}`

    })
    .catch( function(error){
      console.log(error);
    })

