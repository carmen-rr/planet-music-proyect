let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get ('id')

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
        let image = document.querySelector ()


    })
    .catch( function(error){
      console.log(error);
    })

