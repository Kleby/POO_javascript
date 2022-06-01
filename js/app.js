import modificador from './modificador.js';
import ingredientes from './ingredientes.js';
import novoDiv from './criarImagmecomTexto.js';

let ingredientesOrdenadoos = modificador.ordenar(ingredientes, 'name');
ingredientesOrdenadoos=modificador.capitalizar(ingredientesOrdenadoos,'name');



for (let el of ingredientesOrdenadoos){
    console.log(novoDiv(el.img, el.name));
}



// novoDiv('/img/alface-crespa.png', 'Alface');