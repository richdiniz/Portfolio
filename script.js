//função de mostrar os projetos feitos...
function mostrarProjetos(){
        const lista = document.getElementById("listaProjetos");
        lista.classList.toggle("oculto");
    }

    function carregar(){
        var msg= window.document.getElementById('msg');
        var data= new Date();
        var hora= data.getHours();
        if(hora>=6 && hora<12){
            msg.innerHTML='Olá, Bom dia. Eu sou Desenvolvedor Frontend'
        }else if(hora>=12 && hora<18){
            msg.innerHTML='Olá, Boa tarde. Eu sou Desenvolvedor Frontend'
        }else{
            msg.innerHTML=+'Olá, Boa noite. Eu sou Desenvolvedor Frontend'
        }
    }