/* globals $, jQuery */

const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')

searchButton.addEventListener('click', function (event) {
    $.ajax({
        url: 'https://itunes.apple.com/search?term',
        data:{
            term:searchField.value
        },
        success: function ( entity ){
           console.log(entity)
            // let resultsDiv = document.getElementById('search-results')
            // let countP = document.createElement("p")
            // countP.innerText = `Result count: ${results.resultCount}` 
            // resultsDiv.appendChild(countP)
        }
    })
})


// $.agax({
    

// })






// searchButton.addEventListener('click', function(event) {
//     let query = searchField.value
//     // let language = searchLanguage.value -- part of clinton's example

//     // language if statement
    
//     $.ajax({
//         url: 'https://itunes-api-proxy.glitch.me',
//         data: {
//             q: 
//             b: 
//             a: 
//             s: 
//         },

//         // you need to look in the specific API documentation for success parameters (jquery.ajax)
//         success: function (results) {
//             console.log(results)
//             awlkfja;sldkjf
//             a;sdfkj;asdlkfj
//             a;lsja;sldkfja;sdfkjasd;lfkj
//             async;lfkja;sldkfja

//         for (let a;sdlkfj of results.items) {
//             let asd;lfjk = document.createElement('XXXX')
//             :LKAJDF.innerHTML = repoHtml(a;sdlkfj)
//             resultsDiv.appendChild(XXX)
//             }       
//         }
//     })
