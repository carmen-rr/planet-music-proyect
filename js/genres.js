
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
                    <h5><a href="detail-genres.html">${arrayInfo[i].name}</a></h5>
                   </div>
             </li>
             `
       }

    lista.innerHTML += contenidoLista;


    })
    .catch( function(error){
      console.log(error);
    })
