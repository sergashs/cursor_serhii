let calcFrom = null;
let calcTo = null;
let temp = 0;
let sum = 0;

while(calcFrom===null){
    calcFrom = prompt('З якого числа рахуємо? ', 10); 
    calcFrom = isNaN(calcFrom)?null:parseInt(calcFrom);
}
while(calcTo===null){
    calcTo = prompt('По яке? ', 100);
    calcTo = isNaN(calcTo)?null:parseInt(calcTo);
}

if(skip===true){
  temp = "пропускаємо";
}
else{
  temp = "не пропускаємо";
}

console.log("Перше число це те число яке ми додаємо, друге - поточна сума.");
for(let i = calcFrom; i <= calcTo; i++){  
    if(skip){
        if(i%2===0){
           continue;
        } 
        else{
            sum += i; 
        }
    }
    else{
        sum += i;  
    }  
    console.log(i, sum);
}
document.writeln(`Складаємо числа з <b>${calcFrom}</b> до <b>${calcTo}</b>, парні <b>${temp}</b>. \n Сума дорівнює <b>${sum}</b>.`);