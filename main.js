/* globals $, jQuery */

const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
const audioPlayer = $('#audio-player')


$('#search-button').on('click', function (entity) {
    let query = $('#search-field').val()
    // $('#audio-player').attr("src", event.target.src).trigger('play')

$.get('https://itunes.apple.com/search?term', { term: query }, function (entity) {
    console.log(entity)
    let $resultsDiv = $('#search-results')
    $resultsDiv
        .empty()
        .append($('<p>')
            .text(`Total count: ${entity.resultCount}`)
        )
    
    for (let track of entity.results) {
        $resultsDiv.append($('<p>').html(trackHtml(track)))
        }
    }, 'json')
})

function trackHtml(track) {
    return `
        <a href="${track.trackViewUrl}">${track.trackName}</a> - Album: ${track.collectionName} 
        <img src="${track.artworkUrl100}"> 
        <audio src="${track.previewUrl}" controls=""></audio>
    `
}



// $('#audio-player').on('click', function ())
