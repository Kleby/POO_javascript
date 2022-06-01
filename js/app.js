import modificador from './modificador.js';
import ingredientes from './ingredientes.js';
import novoDiv from './novoElemento.js';

let ingredientesOrdenadoos = modificador.ordenar(ingredientes, 'name');
let novoIngrediente;

ingredientesOrdenadoos=modificador.capitalizar(ingredientesOrdenadoos,'name');



for (let el of ingredientesOrdenadoos){
    novoIngrediente=novoDiv(el.img, el.name);
}



// novoDiv('/img/alface-crespa.png', 'Alface');