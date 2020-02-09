let numericStart = Number(prompt('Число з якого починаємо рахувати ', 1));

while(isNaN(numericStart)) {
        alert('Ви ввели не число');
        numericStart = Number(prompt('Число з якого починаємо рахувати ', 1));
}

let numericFinish = Number(prompt('Число на якому закінчуємо рахувати ', 100));

while(isNaN(numericFinish)) {
    alert('Ви ввели не число');
    numericFinish = Number(prompt('Число з якого починаємо рахувати ', 1));
}

let skip = confirm("Пропускати парні числа?")

let sum=0;

for(let i = numericStart; i <= numericFinish;i++) { //5+6+7+8+9+10+11+12+13+14+15
    if(skip===true) {
        if(i%2!==0) {
            sum=sum+i;
        }
    } else {
        sum=sum+i;
    }
}

document.write(`
<p>Початок циклу <b>${numericStart}</b></p>
<p>Кінець циклу <b>${numericFinish}</b></p>
<p>Парні числа ${skip===true ? '<b>пропущені</b>': '<b>не пропущені</b>'}</p>
<p>Сума циклу <b>${sum}</b></p>
`);