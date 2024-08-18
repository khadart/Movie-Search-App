let api = "https://omdbapi.com/?apikey=8ae036ed&t="

    let title = document.querySelector('#title')
    let awards = document.querySelector('#awards')
    let director = document.querySelector('#director')
    let actors = document.querySelector('#actors')
    let collection = document.querySelector('#collection')
    let poster =document.querySelector('#poster')
  let container =  document.querySelector('#movie-container')
    container.classList.add('hidden')
    let movieName = document.querySelector('#movieName')
    let error =document.querySelector("#error")
  
function search(){
    let movieApi = api + movieName.value
 
    fetch(movieApi).then((data)=>{
        return data.json()}).then((data)=>{
         error.innerText=''
            if(data.Error === 'Movie not found!'){
           error.innerText = 'Movie Not Found!'
            }
            else{
                container.classList.remove('hidden')
                title.innerText = data.Title
                awards.innerText = data.Awards
                director.innerText = data.Director
                collection.innerText = data.BoxOffice
                actors.innerText = data.Actors
                poster.src=data.Poster
            }

         

          console.log("data",data)
        })

      
}
   