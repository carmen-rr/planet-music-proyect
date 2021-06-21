/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search')
//let alert =document.querySelector('.alert')
let closeIcon = document.querySelector('.closeIcon')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline';
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline';
    }
    else {this.submit()}

})

campoBuscar.addEventListener('input', function(){
    alert.innerText = ''
    closeIcon.style.display = 'none';
})

/*ARTIST*/


let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
let urlTopSongs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //console.log(data)
        let artist = document.querySelectorAll('h1')
         console.log(artist)
        artist[1].innerText = data.name
        artist[0].innerText = data.name
        console.log(data.name)

        let image = document.querySelector('.img-miley')
        image.src = data.picture_big

        let imageResponsive = document.querySelector('.img-miley-responsive')
        imageResponsive.src = data.picture_big
        

    })
    .catch( function(error){
      console.log(error);
    })

  

  /* fetch(urlAlbum)
    .then( function(response){
        return response.json();
    })
    .then( function(data){

       console.log(data); 

       let arrayInfo = data.data;
       let lista = document.querySelector('.artist-albums');
       let contenidoLista =''; 

       for(let i=0; i<5; i++){
          contenidoLista += 
                 `<li>
                   <img src="${arrayInfo[i].cover_big}" alt="">
                   <h4><a href="${arrayInfo[i].id}>${arrayInfo[i].title}</a></h4>
                 </li>`
       }
       lista.innerHTML += contenidoLista;
       /*let image = document.querySelector('.img-album')
       image.src = data.picture_big

       let album = document.querySelector('h4')
       album.innerText = data.picture_big

    })
    .catch( function(error){
      console.log(error);
    })*/

    fetch (urlTopSongs)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            //console.log(data)
            let arrayInfo = data.data;
            let lista = document.querySelector('.popular-songs');
            let contenidoLista =''; 
     
            for(let i=0; i<arrayInfo.length; i++){
               contenidoLista += 
                      `<li><a href="detail-track.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a></li>`
            }
            lista.innerHTML += contenidoLista;
        })
        .catch( function(error){
            console.log(error);
          })



          fetch(urlAlbum)
          .then( function(response){
              return response.json();
          })
          .then( function(data){
      
             console.log(data); 
      
             let arrayInfo = data.data;
             let lista = document.querySelector('.artist-albums');
             let contenidoLista =''; 
      
             for(let i=0; i<arrayInfo.length; i++){
                contenidoLista += 
                       `<li>
                         <img src="${arrayInfo[i].cover_big}" alt="">
                         <h4><a href="${arrayInfo[i].id}>${arrayInfo[i].title}</a></h4>
                       </li>`
             }
            // console.log(contenidoLista)
             lista.innerHTML += contenidoLista;
            
          })
          .catch( function(error){
            console.log(error);
          })