//função de mostrar ou ocultar os projetos feitos:
    function mostrarProjetos(){
        const lista = document.getElementById("listaProjetos");
        lista.classList.toggle("oculto");
    }
var hj= new Date();
var hora=hj.getHours(); 

//função mensagem de saudação:
    function msg(){
        var msg= window.document.getElementById('msg');
        if(hora>=6 && hora<12){
            msg.innerHTML+='Olá, Bom dia. Eu sou Desenvolvedor Frontend';
        }else if(hora>=12 && hora<18){
            msg.innerHTML+='Olá, Boa tarde. Eu sou Desenvolvedor Frontend';
        }else if(hora>=18){
            msg.innerHTML+='Olá, Boa noite. Eu sou Desenvolvedor Frontend';
        }else{
            msg.innerHTML+='Olá, já é hora de dormir... Eu sou Desenvolvedor Frontend';
        }
    }
//função mudança de estilo:
    function mde(){
        var corpo= document.querySelector('body')
        if(hora>=6 && hora<12){
            corpo.style.backgroundImage="linear-gradient(to bottom,var(--cor8p), white, white)"
        }
        else if(hora>=12 && hora<18){
            corpo.style.backgroundImage="linear-gradient(to bottom,var(--cor7p), white, white)"
        }else if(hora>=18 || (hora<6)){
        corpo.style.backgroundColor = "#1C1C1E"
        corpo.style.color = "#E0E0E0"
        }
    }
//função mudança da foto:    
    function imagemSaudacao(){
        const foto= document.getElementById("fotoHorario");

        if(hora>=6 && hora<12){
            foto.src="imagens/dia.webp";
        }else if(hora>=12 && hora<18){
            foto.src="imagens/tarde.webp";
        }else if(hora>=18){
            foto.src="imagens/noite.webp";
        }else{
            foto.src="imagens/noite.webp";
        }
    }

// mensagem+estilo+foto
    function carregar(){
        msg();
        mde();
        imagemSaudacao();
    }