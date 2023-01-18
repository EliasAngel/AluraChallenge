/*Claves de encriptación
e=enter
i=imes
a=ai
o=ober
u=ufat*/

function btnEncriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("resultado").style.background ="none";
    document.getElementById("resultado").innerHTML = txtCifrado;
}

function btnDesencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("resultado").style.background ="none";
    document.getElementById("resultado").innerHTML = txtCifrado;
}

function btnCopiar() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy")
    alert("Mensaje copiado")

}