
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

//DETAIL-GENRES

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');


let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;
let urlGenres = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`; 

fetch(urlGenres)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

        //BANNER
        let banner = document.querySelector('.banner-detail-genre')
        banner.innerHTML = `<img class="banner-genre" src="${data.picture_xl}" >
                            <img class="banner-artist-genre" src="${data.picture_xl}" >`

        //GENRE NAME
       let genre = document.querySelector('h1')
       genre.innerText =  data.name

        //GENRE TITLE EN PESTAÑA
       let title = document.querySelector('title')
       title.innerText = data.name
    })
     .catch( function(error){
            console.log(error);
    })

    fetch(url) //ARTISTAS
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

        let arrayInfo = data.data
        let lista = document.querySelector ('.detail-genres-article')
        let contenidoLista =''; 
     
        for(let i=0; i<4; i++){
           contenidoLista += 
                  `<section class="dua-pop">
                  <ul>
                      <li> <a href="detail-artist.html?id=${arrayInfo[i].id}"><h2 class="title-pop">${arrayInfo[i].name}</h2></a></li>
                      <li> <a href="detail-artist.html?id=${arrayInfo[i].id}"><img class="pop-image" src="${arrayInfo[i].picture_big}" alt="Genres Detail"> </a></li>
                  </ul>
              </section>`

              
        }
        lista.innerHTML += contenidoLista;

    })
     .catch( function(error){
            console.log(error);
    })


