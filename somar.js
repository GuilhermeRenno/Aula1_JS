function Somar(){
    var n1 = Number(window.document.getElementById("n1").value);
    var n2 = Number(window.document.getElementById("n2").value);
    var soma = n1 + n2 ;
    //alert(soma);

    var resultado = window.document.getElementById("Resultado");

    resultado.innerText = 'Resultado:' + soma;
}