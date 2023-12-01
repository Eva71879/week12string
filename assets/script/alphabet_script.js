'use strict';

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const randomLetter1 = Math.floor(Math.random() * alphabet.length);
const randomLetter2 = Math.floor(Math.random() * alphabet.length);
const randomLetter3 = Math.floor(Math.random() * alphabet.length);
const randomLetter4 = Math.floor(Math.random() * alphabet.length);

const randomWord = alphabet[randomLetter1] + alphabet[randomLetter2] + alphabet[randomLetter3] + alphabet[randomLetter4];
console.log(randomWord);
document.writeln(randomWord);

// вариант Кота

// const wordLength = prompt("Сколько символов должно быть в слове") //как алерт для пользователя
// const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let result = "";
// const randomWord = () => {
//  for (let i = 0; i < wordLength; i++) {
//   const randomIndex = Math.floor(Math.random() * alphabet.length);
//   result += alphabet[randomIndex];
// }
// }
// randomWord()
// document.body.innerText = result;

// 3. Создать программу, которая генерирует случайное слово из четырёх букв.
    
//     Шаги для выполнения задания:
    
//     1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//     2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`. 
//     3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
//     4. Выведи полученное случайное слово на экран, чтобы проверить результат.