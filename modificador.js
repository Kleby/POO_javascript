function fnCapitalizarNovo(colecao, atributo){
    if( typeof(colecao) === 'object'){
        //mapa retorna uma arry ler um array
        var result = colecao.map(function(obj){
            let maiuscula = obj[atributo].charAt(0).toUpperCase();
            let complemento = obj[atributo].slice(1);
            
            obj[atributo] = maiuscula.concat(complemento);
            return obj;

        });

    }
    else {
        var result = colecao.map(function( arr ){
            let maiuscula = arr.charAt(0).toUpperCase();
            let complemento = arr.slice(1);

            arr = maiuscula.concat(complemento);
        });
    }
    return result;
}

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

function ordemAlfa( arr ){
    let ordenado = [];
    // strPedido  = arrCompleto.sort(function(a,b){
    //     return a.localeCompare(b);
    // });
    ordenado  = capitalizar(arr).sort((a,b) =>  a.localeCompare(b));

    return ordenado;
}

function caixaAlta(arr){
    let maiuscula = [];
    let i=0;
    do{
        maiuscula[i] = arr[i].toUpperCase();
        i++;
    }while(i < arr.length);
    return maiuscula;
}
export default {
    key1: capitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    key2: ordemAlfa,
    key3 :caixaAlta
};