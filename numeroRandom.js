let max = document.getElementById("maxInput")
let min = document.getElementById("minInput")
let respuesta = "";


function numeroRandomEntre(min,max){
    alert(Math.ceil(Math.random() * (max - min) + min));
    
}
function limpiarInputMax(){
    max.value = "";
}
function limpiarInputMin(){
    min.value = "";
}
window.addEventListener("offline", () => {
    alert("Has perdido la conexión a internet")
})
window.navigator.vibrate(300);
navigator.vibrate(300);
function vibrar()
{
    window.navigator.vibrate(300);
navigator.vibrate(300);
}
