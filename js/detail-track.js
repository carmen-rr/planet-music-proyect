let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
queryStringToObject.get ('.id')

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks${id}'
