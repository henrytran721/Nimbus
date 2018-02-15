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