import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

console.log(ingredientes[2].name);
console.log(ingredientes[2].price);
console.log(ingredientes[1]);
console.log(typeof ingredientes)

//comando para saber se uma estrutura é um array
console.log(Array.isArray(ingredientes))

// console.log(modificador);
// const PEDIDO = ['macarrão', 'feijão', 'arroz', 'cuscuz', 'água', 'mel', 'mostarda', 'sanduiche'];
// const RESULT_KEY1 = modificador.key1(PEDIDO)
// const RESULT_KEY2 = modificador.key2(RESULT_KEY1);
// const CAIXA_ALTA = modificador.key3(RESULT_KEY2);

// console.log(RESULT_KEY1);
// console.log(RESULT_KEY2);
// console.log(CAIXA_ALTA);
