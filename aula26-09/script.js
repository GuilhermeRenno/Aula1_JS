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

const numeros =[1,2,3,4,5,6,7,8,9,10];

function pares(numeros){
    let numPares= [];

    for(let i = 0;i<numeros.lenght;i++){

        if( numeros[i]%2===0){
            numPares.push(numeros[i]);
        }       

    }
    return numPares;
}
console.log(pares(numeros));

const numerosPares = (numeros) => numeros.filter(num=>num%2===0);
console.log("Resultado: " + numerosPares(numeros));

//funcao retornando numeros divisiveis por 3

const numerosDiv3 = (numeros) => numeros.filter(num=>num%3===0);
console.log("Resultado: " + numerosDiv3(numeros));

//

const celulares = [
{nome:'iphone',preco:5000},
{nome:'galaxy ultra', preco:3000},
{nome:'nokia',preco:2000}
]
//tradicional

var precos = celulares.map(function(celulares){
    return celulares.preco;
});
console.log(precos);

//usadndo arrow function

var precos2 = celulares.map(celular => celular.preco);
console.log(precos2);
