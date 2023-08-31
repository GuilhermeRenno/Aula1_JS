var nome = "joao";
var idade = 30;
var profissao = "administrador";

//document.write("Olá"+ nome + "voce tem"+ idade + " e trabalha como"+ profissao);
/*
function exibirNome() {
    if (true) {
        let nome = "joão";
        document.write(nome);
}

    document.write(nome);
}
exibirNome();

function exibirNome() {
    if (true) {
        var nome = "joão";
        document.write(nome);
}
    document.write(nome);
}*/
//cl
exibirNome();
class Carro {
    constructor(Cor,Modelo,Marca,Dono) {
        this.cor = Cor;
        this.modelo = Modelo;    
        this.marca = Marca;
        this.dono = Dono;  
    }
    getInformacoes(){
        document.write("<br> Cor:"+ this.cor);
        document.write("<br> Modelo:"+ this.modelo);
        document.write("<br> Marca:"+ this.marca);
        document.write("<br> Dono:"+ this.dono);
        document.write("<br>");
    }
    setCor(novaCor){
        this.cor = novaCor;
    }
    getCor(){
        return this.cor;
    }
    setModelo(novaModelo){
        this.modelo = novaModelo;
    }
    getModelo(){
        return this.modelo;
    }
    setMarca(novaMarca){
        this.marca = novaMarca;
    }
    getMarca(){
        return this.marca;
    }
    setDono(novaDono){
        this.dono = novaDono;
    }
    getDono(){
        return this.dono;
    }
}
var carro1 = new Carro("vermelho","Corsa","Chevrolet","joão");
var carro2 = new Carro("preto","Strada","fiat","antonio");