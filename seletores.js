function abrirMensagem(){
    var texto = document.getElementById("meuTexto").value;
    alert(texto);
}
class carro {

    constructor(Marca, Cor, Modelo) {

        this.cor = Cor;

        this.marca = Marca;

        this.modelo = Modelo;

    }    
     getinformacoes() {

        document.write("<br> Cor: " + this.cor);

        document.write("<br> Marca: " + this.marca);

        document.write("<br> Modelo: " + this.modelo);

    }
    getCor(){
        return this.Cor;
    }
    setCor(_cor){
        this.Cor = _cor;
    }
    getMarca(){
        return this.Marca;
    }
    setMarca(_marca){
        this.Marca = _marca;
    }
    getModelo(){            
        return this.Modelo;
    }
    setModelo(_modelo){
        this.Modelo = _modelo;
    }
}

//teste
//teste2
 
let carro1 = new carro("Fiat", "chumbo", "Siena");

let carro2 = new carro("X6", "preto", "BMW");

 