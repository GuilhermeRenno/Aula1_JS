function abrirMensagem(){
    var texto = document.getElementById("meuTexto").value;
    alert(texto);
}
class carro {

    constructor(marca_, cor_, modelo_) {

        this.cor_ = cor_;

        this.marca_ = marca_;

        this.modelo_ = modelo_;

    }    

 

    getinformacoes() {

        document.write("<br> Cor: " + this.cor_);

        document.write("<br> Marca: " + this.marca_);

        document.write("<br> Modelo: " + this.modelo_);

    }

}

 

let carro1 = new carro("Fiat", "chumbo", "Siena");

let carro2 = new carro("X6", "preto", "BMW");

 

carro1.getinformacoes();

carro2.getinformacoes();