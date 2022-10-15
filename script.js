function change(){
    var code = document.getElementById('code');
    var random = Math.round(Math.random()*100000).toString(16);
    var hexa = "#"+random.toUpperCase();
    code.innerHTML = hexa; 
document.body.style.backgroundColor = hexa;
}