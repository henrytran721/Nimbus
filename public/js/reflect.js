'use strict';

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log("Javascript for Reflect Connected");
}

var listedItems = document.getElementsByTagName("li");
var i;
for (i = 0; i < listedItems.length; i++) {
    var span = document.createElement("span");
    var icon = document.createTextNode("\u00D7");
    span.className = "closeButton";
    span.appendChild(icon);
    listedItems[i].appendChild(span);
    console.log("Added");
}