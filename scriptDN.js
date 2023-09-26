function carregar(){
    var mensagem = document.getElementById("msg");
    var imagem = document.getElementById("imagem");
    var data = new Date;
    alert(data);

    var hora = data.getHours();
    var minutos = data.getMinutes();

    mensagem.innerHTML = "A hora atual é <strong>" + hora +"</strong> horas e <strong> "+ minutos +"</strong> minutos";

    if(hora<12){
        imagem.src = 'img/imagem dia as.webp'
    }
    else if(hora<18){
        imagem.src = 'img/imagem tarde certa.jpg'
    }
    else if(hora<12){
        document.body.style.background#080d4680;
        imagem.src = 'img/imagemNoite.jpg'
    }
}