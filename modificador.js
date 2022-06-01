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
    key2: ordemAlfa,
    key3 :caixaAlta
};