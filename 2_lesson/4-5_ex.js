/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
складывать их и возвращать результат. Обязательно использовать оператор return.

5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict";

/**
 * Функция сложения
 * @param  {number} num1
 * @param  {number} num2
 */
const addition = (num1, num2) => num1 + num2;

/**
 * Функция вычитания
 * @param  {number} num1
 * @param  {number} num2
 */
const subtraction = (num1, num2) => num1 - num2;

/**
 * Функция умножения
 * @param  {number} num1
 * @param  {number} num2
 */
const multiplication = (num1, num2) => num1 * num2;

/**
 * Функция деления
 * @param  {number} num1
 * @param  {number} num2
 * @return {} Возвращает ошибку при делении на 0
 */
const division = (num1, num2) => {
    if (num2 === 0) {
        throw "На ноль делить нельзя!";
    } else {
        return num1 / num2;
    }

};

/**
 * Функция для работы с числами
 * @param  {number} arg1 Первое число
 * @param  {number} arg2 Второе число
 * @param  {string} operation Действие с числами
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            try {
                return division(arg1, arg2);
            } catch (error) {
                return "Error: " + error
            }
        default:
            return "Что то пошло не так!"
    }
}

let arg1 = +prompt('Введите первое число:');
let arg2 = +prompt('Введите второе число:');
let operation = prompt('Введите действие (+, -, /, *):');
let result = mathOperation(arg1, arg2, operation);
alert(result);
