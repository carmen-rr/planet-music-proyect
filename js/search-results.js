window.addEventListener('load', function(){
      // let loader = document.querySelector('iframe');
        //loader.style.display = 'none';
    
})
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
queryStringToObject.get('search')

let url = `https://api.deezer.com/search/artist?buscador=${search}`

fetch (url)
.then( function(response){
    return response.json();
})
.then( function(data){
    console.log(data)
    
})
.catch( function(error){
    console.log(error);
  })