"use strict";


// Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
// диапазоне [0, 9].
// После создания массива необходимо вывести в консоль следующие значения:

const randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr);

//1. Сумму элементов массива
let sum = 0;
randomArr.forEach(element => {
    sum = sum + element
});
console.log(sum);

//2. Минимальное значение в массиве
let min = Infinity;
randomArr.forEach(element => {
    if (element < min) {
        min = element;
    }
})
console.log(min);

//3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
//значение равно 3.
for (const i in randomArr) {
    if (randomArr[i] === 3) {
        console.log(i);
    } else {
        console.log([]);
    }
}

// Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
// в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
// массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
// не окажется, значит нужно будет вывести пустой массив.

