let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
queryStringToObject.get ('id')

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}'

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

    })
    .catch( function(error){
      console.log(error);
    })

