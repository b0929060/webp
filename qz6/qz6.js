setInterval(myFunction,1000);
function myFunction(){
    const event= new Date();
    $("#demo").text(event.toLocaleTimeString('it-IT'));
}