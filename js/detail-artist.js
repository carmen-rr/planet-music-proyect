let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
        let artist = document.querySelectorAll('h1')
         artist.innerText = data.name

        let image = document.querySelector('.img-miley')
        image.src = data.picture_big

        let imageResponsive = document.querySelector('.img-miley-responsive')
        imageResponsive.src = data.picture_big
        /*let album = document.querySelector ('.album-detail-track')
        album.innerHTML = `<a href="detail-album.html?id=${data.album.id}">${data.album.title} </a>`

        let artist = document.querySelector ('h3')
        artist.innerHTML = `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`
        
        let imagen = document.querySelector ('.img-dua')
        imagen.src = data.album.cover_big*/


    })
    .catch( function(error){
      console.log(error);
    })

    let urlTopSongs = 'https://api.deezer.com/artist/27/top'