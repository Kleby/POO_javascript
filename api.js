import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

const PEDIDO = ['macarrão', 'feijão', 'arroz', 'cuscuz', 'água', 'mel', 'mostarda', 'sanduiche'];

modificador.capitalizarNovo(ingredientes, 'name');

console.log(modificador.capitalizarNovo(ingredientes, 'name'));
// console.log(modificador.capitalizarNovo(PEDIDO));

//comando para saber se uma estrutura é um array
// console.log(Array.isArray(ingredientes))

// console.log(modificador);
// const PEDIDO = ['macarrão', 'feijão', 'arroz', 'cuscuz', 'água', 'mel', 'mostarda', 'sanduiche'];
// const RESULT_KEY1 = modificador.key1(PEDIDO)
// const RESULT_KEY2 = modificador.key2(RESULT_KEY1);
// const CAIXA_ALTA = modificador.key3(RESULT_KEY2);

// console.log(RESULT_KEY1);
// console.log(RESULT_KEY2);
// console.log(CAIXA_ALTA);
