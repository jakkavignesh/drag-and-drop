function allowDrop(ev) {
    ev.preventDefault();
}

function change(ev) {
  ev.target.className += ' chng';
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
    
function drop(ev) {  
    ev.preventDefault();
  
    var data = ev.dataTransfer.getData("text");
  
     ev.target.appendChild(document.getElementById(data));
  
}

function reset() {
  // redirectToPage('https://myfirstvignesh.000webhostapp.com/');
  window.location.href = 'https://jakkavignesh.github.io/drag-and-drop.github.io/';
}
