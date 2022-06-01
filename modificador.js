//Com arrow function
function fnCapitalizar (colecao, attr){
    if( colecao.length > 0){
        if(typeof colecao[0] === 'object' && attr ){
            colecao.map( item => item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1));
        }
        else {
            colecao.map(item  => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
        return colecao;
    }
}


//function normal sem arrow function

// function fnCapitalizarNovo(colecao, attr){
//     if( typeof(colecao) === 'object' && attr){
//         //mapa retorna uma arry ler um array
//         var result = colecao.map(function(obj){
//             let maiuscula = obj[attr].charAt(0).toUpperCase();
//             let complemento = obj[attr].slice(1);
            
//             obj[attr] = maiuscula.concat(complemento);
//             return obj;

//         });

//     }
//     else {
//         var result = colecao.map(function( arr ){
//             let maiuscula=(arr.charAt(0).toUpperCase());
//             let complemento = arr.slice(1);
//             result = maiuscula.concat(complemento);
//             return result
//         });
//     }
//     return result;
// }

function capitalizar( arr ){
    let maiuscula = [];
    let complemento = [];
    let completo = [];
    let j = 0;
    do {
        maiuscula[j] = arr[j].charAt(0).toUpperCase();
        complemento[j] = arr[j].slice(1);
        completo[j] = maiuscula[j].concat(complemento[j]);
        j++;
    }while(j< arr.length);
    return completo;
}


function fnOrdenar(colecao, attr){
    return attr ? //operador ternario
            colecao.sort( function( a, b){ //caso exista attr
                return typeof a[attr] === 'number' ? //operador ternario
                    a[attr] - b[attr] : //caso attr seja verdadeiro como numero
                    a[attr].localeCompare(b[attr]) //caso attr seja diferente de numero
            }): 
            //caso não exista attr
            colecao.sort(function(a, b){
                return typeof a == 'number' ? //operador ternario 
                    a - b : //caso o tipo seja um numero verificar se a é menor que b 
                    a.localeCompare(b) //caso o attr seja diferente de number
                    
            });

}

/*
function ordemAlfa( arr ){
    let ordenado = [];
    // strPedido  = arrCompleto.sort(function(a,b){
    //     return a.localeCompare(b);
    // });
    ordenado  = capitalizar(arr).sort((a,b) =>  a.localeCompare(b));

    return ordenado;
}
*/
export default {
    capitalizarNovo: fnCapitalizar,
    ordenar: fnOrdenar,
};