"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль .
*/


const positive = Number(prompt(`введите положительное число {positive} `));
const negative = Number(prompt(`введите отрицательное число {negative} `));
if (positive > 0 && negative < 0) {
    alert("Все значения верные.")
} else alert("Одно или более значений некорректно.");
