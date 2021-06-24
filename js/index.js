
/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search]')
let closeIcon = document.querySelector('.closeIcon')
let alerta = document.querySelector('.probando')
let alerta1 = document.querySelector('.probando1')
let alerta2 = document.querySelector('.probando2')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (campoBuscar.value == ""){
        closeIcon.style.display = 'inline';
        alerta1.style.display = 'flex';
        //document.querySelector('.probando').innerText = "The field can't be empty"
        
    }
    else if (campoBuscar.value.length < 3){
        closeIcon.style.display = 'inline';
        alerta2.style.display = 'flex';
        //document.querySelector('.probando').innerText = "You should enter at least three characters"
        //let alerta = document.querySelector('.probando')
        //alerta.innerText = "You should enter at least three characters";
        //alerta.style.display = 'flex';
    }
    else {this.submit()}

})

    campoBuscar.addEventListener('input', function(){
    closeIcon.style.display = 'none';
    alerta1.style.display = 'none';
    alerta2.style.display = 'none';
   //document.querySelector('.probando').style.display = 'none';
    //document.querySelector('.probando').style.display = 'none';
   //alerta.style.display = 
})

/*INDEX*/

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
                <img src="${arrayInfo[i].album.cover_big}" alt="Image of ${arrayInfo[i].title} Song"> 
                <div class="text"> 
                    <h5><a href="detail-track.html?id=${arrayInfo[i].id}"> ${arrayInfo[i].title}</a> </h5>
                    <p><a href="detail-artist.html?id=${arrayInfo[i].artist.id}"> - ${arrayInfo[i].artist.name}</a></p>
               </div>
               <a href="detail-track.html?id=${arrayInfo[i].id}"><i class="fas fa-plus-circle"></i></a> 
               </li>`
         
       }

      lista.innerHTML += contenidoLista;


/*let favoritos = [];

let recuperoDatosStorage = localStorage.getItem('favoritos');

if(recuperoDatosStorage != null){
    favoritos = JSON.parse(recuperoDatosStorage);
}
if(favoritos.includes(idParaFavoritos)){
    let texto = document.querySelector('.fa-plus-circle');
    texto.innerHTML = '<i class="fas fa-times-circle"></i>';
}

let fav = document.querySelector('.fa-plus-circle')

fav.addEventListener ('click', function(){
    if(favoritos.includes(id)){
        let quitoId = favoritos.indexOf(id);
        favoritos.splice(quitoId, 1);
        let textoAgregar = document.querySelector('.fa-plus-circle');
        textoAgregar.innerHTML = '<i class="fas fa-plus-circle"></i>'
    }else{
        favoritos.push(id)

        let textoSacar = document.querySelector('.fa-plus-circle');
        textoSacar.innerHTML = '<i class="fas fa-times-circle"></i>'
    
    }
  
    let favParaStorage = JSON.stringify(favoritos)
    localStorage.setItem ('favoritos', favParaStorage);
    console.log(localStorage)
})*/


    })
    .catch( function(error){
      console.log(error);
    })

//Playlist Album:

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
                                  <img src="${arrayInfo[i].cover_big}" alt="Image of ${arrayInfo[i].title} Album">
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

//Playlist Artist:

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
                    <img src="${arrayInfo[i].picture_big}" alt="Image of ${arrayInfo[i].name}">
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
