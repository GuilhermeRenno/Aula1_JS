function clicar(){
    var area = window.document.getElementById('area');
    area.style.background = 'blue'
}
function voltar(){
    var area = window.document.getElementById('area');
    area.style.background = 'rgb(49, 222, 49)';
    area.innerText = "voltou";
}
function entrar(){
    var area = window.document.getElementById('area');
    area.style.background = 'black';
    area.innerText = "Entrou";
}
function sair(){
    var area = window.document.getElementById('area');
    area.style.background = 'orange';
    area.innerText = "Saiu";
}