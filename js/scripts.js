// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

const multiplicationTitle = document.querySelector("#multiplication-title span")

// funções
const createTable = (number, multiplicatorNumber) => {

multiplicationTable.innerHTML = "";  //pegando o html interno da div e deixo vazio 
  
    for (i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        const template = `<div class="row">
            <div class = "operation">${number} x ${i} </div>
            <div class = "result">${result}</div
            </div`;
            
        const parser = new DOMParser()

        const htmltemplate = parser.parseFromString(template, "text/html") 

        const row = htmltemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerText = number;
}     

// Eventos
multiplicationForm.addEventListener("submit", (e) =>{
        e.preventDefault(); //retirando recarregamento da pag ao clicar no botao

        const multiplicationNumber = +numberInput.value; // pegando valor dos inputs com value o + diz que é numero inteiro

        const multiplicatorNumber = +multiplicationInput.value; // pegando valor dos inputs com value o + diz que é numero inteiro
        
        if (!multiplicationNumber || !multiplicatorNumber) return;

        createTable(multiplicationNumber, multiplicatorNumber);
    
})