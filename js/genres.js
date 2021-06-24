
/*FORMULARIO*/
let formulario = document.querySelector('form')
let campoBuscar = document.querySelector('[name=search]')
let closeIcon = document.querySelector('.closeIcon')
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
    }
    else {this.submit()}

})

   campoBuscar.addEventListener('input', function(){
   closeIcon.style.display = 'none';
   alerta1.style.display = 'none';
  alerta2.style.display = 'none';
   //document.querySelector('.probando').style.display = 'none';
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
      /*IMAGENES DE CARPETA IMG + TITULO DE CADA GENERO QUE LLEVA A SU DETAIL GENRES */
          `<li>          

                  <a href="./detail-genres.html?id=${arrayInfo[i].id}"><img src="img/generos/img${i}.png" alt="Genre'"></a>
                   <div>
                    <h5><a href="detail-genres.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h5> 
                   </div>
             </li>
             `
       }

    lista.innerHTML += contenidoLista;
    
//<a href="./detail-genres.html?id=${arrayInfo[i].id}"><img src="${arrayInfo[i].picture_big}" alt="Genre'"></a>

    })
    .catch( function(error){
      console.log(error);
    })
