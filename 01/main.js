var reference = new Firebase("https://webapp10jan.firebaseio.com/");



reference.on("value", function(snapshot){
    document.getElementById("SP1").innerHTML = snapshot.val().Personal.Pregunta1.Sara;
    document.getElementById("SP2").innerHTML = snapshot.val().Personal.Pregunta2.Sara;
    document.getElementById("SP3").innerHTML = snapshot.val().Personal.Pregunta3.Sara;
    document.getElementById("SP4").innerHTML = snapshot.val().Personal.Pregunta4.Sara;
    document.getElementById("SP5").innerHTML = snapshot.val().Personal.Pregunta5.Sara;
    
    document.getElementById("FP1").innerHTML = snapshot.val().Personal.Pregunta1.Frida;
    document.getElementById("FP2").innerHTML = snapshot.val().Personal.Pregunta2.Frida;
    document.getElementById("FP3").innerHTML = snapshot.val().Personal.Pregunta3.Frida;
    document.getElementById("FP4").innerHTML = snapshot.val().Personal.Pregunta4.Frida;
    document.getElementById("FP5").innerHTML = snapshot.val().Personal.Pregunta5.Frida;
    
    document.getElementById("JP1").innerHTML = snapshot.val().Personal.Pregunta1.Juan;
    document.getElementById("JP2").innerHTML = snapshot.val().Personal.Pregunta2.Juan;
    document.getElementById("JP3").innerHTML = snapshot.val().Personal.Pregunta3.Juan;
    document.getElementById("JP4").innerHTML = snapshot.val().Personal.Pregunta4.Juan;
    document.getElementById("JP5").innerHTML = snapshot.val().Personal.Pregunta5.Juan;
    
    document.getElementById("MP1").innerHTML = snapshot.val().Personal.Pregunta1.Miguel;
    document.getElementById("MP2").innerHTML = snapshot.val().Personal.Pregunta2.Miguel;
    document.getElementById("MP3").innerHTML = snapshot.val().Personal.Pregunta3.Miguel;
    document.getElementById("MP4").innerHTML = snapshot.val().Personal.Pregunta4.Miguel;
    document.getElementById("MP5").innerHTML = snapshot.val().Personal.Pregunta5.Miguel;
});