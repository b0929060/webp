document.addEventListener('keydown',logkey);
function logkey() {
var log = document.createElement("t"); 
      log.innerHTML = String.fromCharCode(event.keyCode); 
      log.setAttribute("id", "text"); 
      document.body.appendChild(log);
 }