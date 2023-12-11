document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById ('display'); // вывожу все на дисплей
    let Input = '';// ввела переменую, которая хранить все , что вводится 
// добавила событие на работу калькулятора, после загрузки документа в Дом

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.textContent));
    });// собрали все вноки БТН и добаляем к ним событие нажатия клавиш

    function handleButtonClick(value) {// далее описываем соотвественно функции на основые кнопки управления через если..по аналогии в лекцией
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
//указываем как выставляются значения для работы функции основных команд С, стереть, результат
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


/*
Лекционный код, работает

const display = document.getElementById('display'),
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