function TocaSom (idElementAudio) {
   const elemento = document.querySelector(idElementAudio);

  
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('elemento não encontrado ou seletor invalido!')
    }
   

}
    const ListaDeTeclas = document.querySelectorAll('.tecla');

    /*
 
 
    let contador = 0;


    // ENQUANTO 
    while (contador < ListaDeTeclas.length ) {
        const tecla = ListaDeTeclas[contador];
        const instrumento = tecla.classList[1];

        

        // template string
        const idAudio = `#som_${instrumento}`;
        
        //console.log(idAudio);

        tecla.onclick = function(){ TocaSom(idAudio)
        }

        contador = contador + 1;
       
        // console.log(contador)
    }
        */

        let contador = 0;


    // para 
    for (let contador = 0 ; contador  < ListaDeTeclas.length ; contador ++ ) {
        const tecla = ListaDeTeclas[contador];
        const instrumento = tecla.classList[1];

        

        // template string
        const idAudio = `#som_${instrumento}`;
        
        //console.log(idAudio);

        tecla.onclick = function(){ TocaSom(idAudio)
        }
       
        tecla.onkeydown = function (evento){
            
            if (evento.code === 'Space' || evento.code ==='Enter' ) {
                tecla.classList.add('ativa');
             }
        }
        
        
        tecla.onkeyup =  function (){
            tecla.classList.remove('ativa');
        }
              
        // console.log(contador)
    }
