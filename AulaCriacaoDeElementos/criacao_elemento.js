    const Autores = [
    {
        nome: "Autor1",
        email: "autor1@email.com",
        foto: "img1.jpg"
    },
    {
        nome: "Autor2",
        email: "autor2@email.com",
        foto: "img1.jpg"
    },
    {
        nome: "Autor3",
        email: "autor3@email.com",
        foto: "img1.jpg"
    }

]


function listar2(){

    var d = document.getElementById("principal");
    var ul = document.createElement("ul");

    Autores.map(function(autor){
        var li = document.createElement("li");
        var nome = document.createElement("h3");
        var imagem = document.createElement("img");
        var email = document.createElement("h3");
        nome.innerHTML = autor.nome;
        email.innerHTML = autor.email;
        imagem.src = autor.foto;
        imagem.width = 150;
        imagem.height = 200;
    
        ul.appendChild(li);
        li.appendChild(nome);
        li.appendChild(email);
        li.appendChild(imagem);
    
    } );

    d.appendChild(ul);

}

function carregar(){
    var d = document.getElementById("principal");
    d.innerHTML = "<h1>Teste</h1>" ;

    var titulo = document.createElement("h2");
    titulo.innerHTML = "adicionando elementos";
    d.appendChild(titulo);


    var imagem = document.createElement("img");
    imagem.src = "img1.jpg";
    imagem.width = 150;
    imagem.height = 200;
    d.appendChild(imagem);

}
function listar(){

    var d = document.getElementById("principal");

    var ul = document.createElement("ul");
    
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");


    var nome1 = document.createElement("h3");
    var nome2 = document.createElement("h2");

    var email1 = document.createElement("spam");
    var email2 = document.createElement("spam");

    d.appendChild(ul);

    ul.appendChild(li1);
    ul.appendChild(li2);

    li1.appendChild(nome1);
    li1.appendChild(email1);

    li2.appendChild(nome2);
    li2.appendChild(email2);

    nome1.innerHTML = "joao";
    nome2.innerHTML = "joao2";

    email1.innerHTML = "email1@test.com";
    email2.innerHTML = "email2@test.com";


}


//aula 12/09

function fazerGet(){
    fetch("https://randomuser.me/api/?results=10")
    .then((Response)=> Response.json())
        .then(function(data){
            let pessoas = data.results;
            console.log(pessoas);
            

                var d = document.getElementById("principal");
                var ul = document.createElement("ul");
            
                pessoas.map(function(pessoa){
                    var li = document.createElement("li");
                    var nome = document.createElement("h3");
                    var imagem = document.createElement("img");
                    var email = document.createElement("h3");
                    var endereco = document.createElement("h3");

                    nome.innerHTML = pessoa.name.first+" "+pessoa.name.last; 
                    email.innerHTML = pessoa.email;
                    endereco.innerHTML = pessoa.location.city+" , "+pessoa.location.state+" , "+pessoa.location.country;
                    imagem.src = pessoa.picture.thumbnail;
                    

                
                    ul.appendChild(li);
                    li.appendChild(nome);
                    li.appendChild(email);
                    li.appendChild(imagem);
                    li.appendChild(endereco);
                
                } );
            
                d.appendChild(ul);
            


        });
    }