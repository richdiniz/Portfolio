//função de mostrar ou ocultar os projetos feitos:
    function mostrarProjetos(){
        const lista = document.getElementById("listaProjetos");
        lista.classList.toggle("oculto");
    }


//função mensagem de saudação:
    function msg(){
        var msg= window.document.getElementById('msg');
        var data= new Date();
        var hora= data.getHours();
        if(hora>=6 && hora<12){
            msg.innerHTML+='Olá, Bom dia. Eu sou Desenvolvedor Frontend';
        }else if(hora>=12 && hora<18){
            msg.innerHTML+='Olá, Boa tarde. Eu sou Desenvolvedor Frontend';
        }else if(hora>=18){
            msg.innerHTML+='Olá, Boa noite. Eu sou Desenvolvedor Frontend';
        }
    }
//função mudança de estilo:
    function mde(){
        var hj=new Date();
        var hr=hj.getHours();
        if(hr>=18){
        var corpo= document.querySelector('body')
        corpo.style.backgroundColor = "#1C1C1E"
        corpo.style.color = "#E0E0E0"
        }
    }

// mensagem+estilo+
    function carregar(){
        msg();
        mde();
    }