'use strict'

$(document).ready(() => {

  $('#file-upload').change( (e) => {
    $('form').data({ files: e.target.files })
  })

  $('form').submit( (e) => {
    let files = $('form').data().files

    let data = new FormData()
    $.each(files, (key, value) => {
      data.append(key, value)
    })

    $.ajax({
      url: window.location.origin + '/upload/',
      type: 'POST',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      error: function(jqXHR, textStatus) {
        alert('Error: ' + textStatus)
      },
      success: function(data) {
        console.log(data)
        alert('File Size: ' + data.size)
      }
    })

    e.preventDefault()
    return false
  })
})
