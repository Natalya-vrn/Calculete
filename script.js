document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let Input = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.textContent));
    });

    function handleButtonClick(value) {
        if (value === 'AC') {
            clearDisplay();
        } else if (value === '&larr') {
            deleteLastCharacter();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        Input += value;
        display.value = Input;
    }

    function clearDisplay() {
        Input = '';
        display.value = '';
    }

    function deleteLastCharacter() {
        Input = Input.slice(0, -1);
        display.value = Input;
    }

    function calculateResult() {
        try {
            Input = eval(Input);
            display.value = Input;
        } catch (oshibka) {
            display.value = 'oshibka';
        }
    }
});


/*const display = document.getElementById('display'),
btn = document.querySelectorAll('.btn'),
dev = document.querySelectorAll('.divition'),
mult = document.querySelectorAll('.multiplication'),
subst =document.querySelectorAll('.substract'),
addit =document.querySelectorAll('.addition'),
sum = document.querySelectorAll('.sum'),
mod = document.querySelectorAll('.modulo');
let arr = [];
let accum = null;

function calculat (btnValue) {
    let value = btnValue.innerText;

    if(value === "AC"){
        arr = [];
        display.value = ""

    } else if(value === "←"){
        arr.pop();
        display.value = arr.join("")

    } else if(value === "="){
        display.value = eval(accum);
        arr = [];
        

    } else {
        arr.push(value)
        console.log('arr', arr)
        accum = arr.join("")
        display.value = arr.join("")
        }

}

btn.forEach(item => item.addEventListener('click', (event)=>{
    let btnValue = event.target;
    calculat(btnValue)
}))
*/