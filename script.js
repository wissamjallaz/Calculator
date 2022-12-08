display = document.querySelector('.display')
numberButtons = document.querySelectorAll('.number');
operatorButtons = document.querySelectorAll('.operators')


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function percentage(a){
    a/100
}

function operate(operator, a, b){
    switch (operator){
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
        case "%":
            percentage(a,b);
            break;
        default:
            console.log("Enter Valid Operator");
    }
}

function populate(){
    numberButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
            display.textContent = +button.innerHTML;
            input = +button.innerHTML;
    })
})}

operatorButtons.forEach(operator=>{
    operator.addEventListener('click', ()=>{

    })
})
