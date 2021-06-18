let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('[name="search"]');
let alert = document.querySelector(".alert");
let closeIcon = document.querySelector('.closeIcon');
 
 
formulario.addEventListener('submit', function(event){
    event.preventDefault();
 
    if(campoBuscar.value == ""){
       //alert('Please, fill in the field');
       alert.innerText = 'Please, fill in the field...';
       closeIcon.style.display = 'inline-block'
    }
    else if (campoBuscar.value.length < 3){
       //alert('Please, fill in with more than 3 characters');
       alert.innerText = 'Please, fill in with more than 3 characters..';
        closeIcon.style.display = 'inline-block'
    }
    else {
        this.submit ();
    }
})
 
campoBuscar.addEventListener('input', function(){
   alert.innerText = '';
   closeIcon.style.display = 'none'
})
