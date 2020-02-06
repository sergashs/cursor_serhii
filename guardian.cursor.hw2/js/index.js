let numericStart = +(prompt('Число з якого починаємо рахувати ', 1));
let numericFinish = +(prompt('Число на якому закінчуємо рахувати ', 100));
let skip = confirm("Пропускати парні числа?");


if (numericStart && numericFinish) {
    let result1 = 0;
    let sum = 0;
    
    for (let i = numericStart; i<=numericFinish; i++) {
        if ( skip && !( i % 2 == 0 )  ) {
            result1 +=i;
            i++;
        } else {
            sum +=i;
        }
    }

    if(result1){
      document.writeln(`Сума не парних чисел: <b>${result1}</b>`)
    }else{
      document.writeln(`Сумма всіх чисел: <b>${sum}</b>`)
    }

}
