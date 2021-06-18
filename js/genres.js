/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search')

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

/*GENRES*/







let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`; 


fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){

       console.log(data);

       let arrayInfo = data.data;
       
       let lista = document.querySelector('.lista-genres'); 
       let contenidoLista = '';

       for(let i=1; i<10; i++){
         
        contenidoLista += 
      
          `<li>
                  <a href="./detail-genres.html?id=${arrayInfo[i].id}"><img src="img/generos/pop.pic.png" alt="Genre'"></a>
                   <div>
                    <h5><a href="detail-genres.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h5>
                   </div>
             </li>
             `
       }

    lista.innerHTML += contenidoLista;


    })
    .catch( function(error){
      console.log(error);
    })
