let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

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
        
        fetch (urlAlbum)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data)
            let arrayInfo = data.data;
            let lista = document.querySelector('popular-songs');
            let contenidoLista =''; 
     
            for(let i=0; i<6; i++){
               contenidoLista += 
                      `<li><a href="detail-track.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></li>`
            }
            lista.innerHTML += contenidoLista;
        })
        .catch( function(error){
            console.log(error);
          })


    })
    .catch( function(error){
      console.log(error);
    })

    let urlTopSongs = 'https://api.deezer.com/artist/27/top'