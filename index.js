let action = document.getElementById("criar")// selecionando o botao

action.addEventListener('click', carregar)//escutando o evento click do botão

let tabuada = document.getElementById('tabuada')//selecionando a div tabuada
function carregar(){
    let numero = window.document.getElementById('numero')//selecionando o número digitado no input

    tabuada.innerText=""

    let i = 1;
    do {
        
        tabuada.innerHTML += `${numero.value} * ${i} = ${numero.value * i}<br>`;// escrevendo o resultado
        i++
    } while (i <= 10)
    
}


