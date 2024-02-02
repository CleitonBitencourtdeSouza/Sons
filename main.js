function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        alert('Elemento não encontrado')
    }
}


const ListadeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto = while
while (contador < ListadeTeclas.length){

    const tecla = ListadeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //templete string

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    contador = contador + 1;

    tecla.onkeydown = function(evento){
        if(evento.code == 'Space'){
           tecla.classList.add('ativa');
        } 
        
        if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
       tecla.classList.remove('ativa'); 
    }

}
