function soma(a,b){
return a+b;
}

var resultado = soma(10,20)
console.log("Resultado"+resultado);

//funcao anonima
const res=function(a,b){
    return a+b;
}
console.log("Resultado 1:"+res);

//arrow funcao
const res2 = (a,b)=>{return a+b}
console.log("Resultado 2:"+res2);

// omitindo return
const res3 = (a,b)=> a+b;
console.log("Resultado 3:"+res3);

//helloword

var hello = (mensagem)=> "Olá " + mensagem;

//tarefinha

var dobrar = (a)=> a*2;

//adicionando elemento

var addTexto = ()=>{
    document.getElementById("principal").innerHTML +="<h3>clicou</h3>";
}
document.getElementById("btn").addEventListener('click', addTexto);