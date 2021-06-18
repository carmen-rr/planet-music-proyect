window.addEventListener('load', function(){
      let loader = document.querySelector('iframe');
      loader.style.display = 'none';
    
})
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let search = queryStringToObject.get('search')

let palabraBuscada = document.querySelector('h2')
let hola = palabraBuscada.innerText += ` '${search}'`;

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${search}`

fetch (url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data)
    let arrayInfo = data.data;
    let searchArtist = document.querySelector('.result-artist');
    let resultArtist = '';
    for (let i=0; i<arrayInfo.length; i++){
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


/*  let queryString = location.search //Caputramso qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let aBuscar = queryStringToObject.get('milanesa'); //Acá va el name del campo input del formulario.

let datoBuscado = document.querySelector('.datoBuscado');
datoBuscado.innerText = aBuscar;

let url = `https://api.giphy.com/v1/gifs/search?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&q=${aBuscar}&limit=25&offset=0&rating=g&lang=en`

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //Aca muestro código
        console.log(data);
        let info = data.data;
        let section = document.querySelector('.lista');
        let resultados = '';

        for(let i=0; i<info.length; i++){
            resultados+= `<article>
                            <h2>${info[i].title}</h2>
                            <img src="${info[i].images.original.url}">
                        </article>`
        }
        section.innerHTML += resultados
        

    })
    .catch( function(error){
        console.log(error);
    }) */