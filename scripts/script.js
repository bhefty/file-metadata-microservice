'use strict'
$(document).ready(() => {
  console.log('stop that')
  let files

  $('input[type=file]').on('change' (event) => {
    files = event.target.files
  })

  $('form').on('submit', (event) => {
    event.stopPropagation()
    event.preventDefault()
  
    let data = new FormData()
    $.each(files, (key, value) {
      data.append(key, value)
    })

    $.ajax({
      url: window.location.origin + '/api/fileanalyze/',
      type: 'POST',
      data: data,
      cache: false,
      contentType: false,
      error: function(jqXHR, textStatus, errorThrown) {
        alert('ERRORS: ' + textStatus)
      },
      success: function(data) {
        alert('File Size: ' + data.fileSize)
      }
    })
  })
})
