'use strict';

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log("Javascript for Reflect Connected");
}

// close button
var listedItems = document.getElementsByTagName("LI");
var i;
for (i = 0; i < listedItems.length; i++) {
    var span = document.createElement("SPAN");
    var icon = document.createTextNode("\u00D7");
    span.className = "closeButton";
    span.appendChild(icon);
    listedItems[i].appendChild(span);
    console.log("Added");
}

//close action
var close = document.getElementsByClassName("closeButton");
var i;
for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        console.log("CLOSEE");
    }
}

function addList() {
    var li = document.createElement("li");
    var newItemVal = document.getElementById("myInput").value;
    var textObj = document.createTextNode(newItemVal);
    console.log(document.getElementById("myInput"));
    li.appendChild(textObj);
    if( newItemVal == '') {
        alert("Please state what is on your mind.");
    } else {
        document.getElementById("UList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    // Now add X button
    var span = document.createElement("SPAN");
    var icon = document.createTextNode("\u00D7");
    span.className = "closeButton";
    span.appendChild(icon);
    li.appendChild(span);
    
    for( i = 0; i < close.length; i++ ) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
