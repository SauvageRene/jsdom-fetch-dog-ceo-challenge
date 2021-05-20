console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function challege1() {
    return fetch(imgUrl)
    .then(resp =>json())
    .then(json => console.log(json))
}