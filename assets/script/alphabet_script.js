'use strict';

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
const randomLetter1 = Math.floor(Math.random() * alphabet.length);
const randomLetter2 = Math.floor(Math.random() * alphabet.length);
const randomLetter3 = Math.floor(Math.random() * alphabet.length);
const randomLetter4 = Math.floor(Math.random() * alphabet.length);

const randomWord = alphabet[randomLetter1] + alphabet[randomLetter2] + alphabet[randomLetter3] + alphabet[randomLetter4];
console.log(randomWord);
document.writeln(randomWord);

// 3. Создать программу, которая генерирует случайное слово из четырёх букв.
    
//     Шаги для выполнения задания:
    
//     1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//     2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`. 
//     3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
//     4. Выведи полученное случайное слово на экран, чтобы проверить результат.