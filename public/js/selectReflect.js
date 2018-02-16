'use strict';

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    var items = sessionStorage.getItem('reflectionItems');
    var parsedItems = JSON.parse(items);
    console.log(parsedItems);
    //alert(parsedItems);
    //alert(parsedItems.length);
    //alert(parsedItems[0]);
    var i;
    for( i = 0; i < parsedItems.length; i++) {
        var li = document.createElement("li");
        var newItemVal = parsedItems[i];
        var textObj = document.createTextNode(newItemVal);
        li.appendChild(textObj);
        document.getElementById("UList").appendChild(li);
        }
    
}

var list = document.getElementsByTagName('li');
var selectImportant = document.querySelector('ul');
selectImportant.addEventListener('click', function(ev) {
    sessionStorage.setItem('theFocus', ev.target.innerText);
    //console.log(ev.target.innerText);
    //console.log(list.length);
    ev.target.classList.remove("crossout");
    for( var i = 0; i < list.length; i++) {
        //console.log(list[i].innerHTML);
        if( list[i].innerHTML != ev.target.innerText) {
            list[i].classList.add('crossout');
        }
    }
}, false);  