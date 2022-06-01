const DIV = document.querySelector('#container-ingredientes');

function novoDiv( img ,nome ){
    let newDiv = document.createElement('div');
    let newIMG = document.createElement('img');
    let newP = document.createElement('p');
    newP.textContent = nome;
    console.log(newP)
    newDiv.setAttribute('class', 'ingrediente');
    newP.setAttribute('class', 'nome-ingrediente');
    newIMG.setAttribute('src',img);

    newDiv.appendChild(newIMG);
    newDiv.appendChild(newP);

    return DIV.appendChild(newDiv);
}

export default novoDiv;