'use strict';

var feelJson = {};

$(document).ready(function() {
    initializePage();
})

function initializePage() {

   // var data = JSON.parse(sessionStorage.getItem('stepsData'));
   // console.log(data);

   // $(document.body).append(data);

    
   
   // html = $('#progressHandlebar').html();
   // template = Handlebars.compile(html);

   // appendText = template(data);
   // $('#data').html(appendText);
   console.log("JS LOADED FOR CHECKIN");
   console.log(document.querySelector('#stepNum').textContent);
}

function nextPage() {
    console.log("next page called");
    var data = document.querySelector('#title').textContent;
    console.log(data);
    feelJson.step = data;
    var feel = document.getElementById('q2').value;
    console.log(feel);
    feelJson.feelData = feel;
    console.log(feelJson);
    feelJson.stepNum = document.querySelector('#stepNum').textContent;
    $.post('/progress/updateFeel', feelJson);
}
