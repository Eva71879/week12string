const str = document.querySelector('#str');
const string = str.innerText;
// 1. Выведите в консоль количество символов в тексте.
// console.log(string.length); //904

// 2. Добавьте перенос строки после каждого символа `;` и сохраните результат в переменную `result`.
const result = string.replace(/;/gi, ';\n');

// 3. Удалите все пробелы в переменной `result` и сохраните результат в переменную `substring`.
const substring = result.replaceAll(' ', '');

// 4. Извлеките подстроку из переменной `result`, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную `newText`.
const newText = substring.slice (28, 50);
const fifthLetter = substring[50]; //проверила какой символ 50й
console.log(fifthLetter); //символ н
console.log(newText); //в подстроку не включен 50й символ

// 5. Замените в извлеченной подстроке (`newText`) все вхождения слова `клён` на `дубе` и сохраните результат в переменную `replacedText`.

const replacedText = newText.replaceAll('клён', 'дубе');

// 6. Приведите текст в переменной `result` к верхнему регистру и сохраните результат в переменную `replacedText2`.
const replacedText2 = result.toUpperCase();

// 7. Замените все вхождения слова `клён` на `дуб` в переменной `result` и сохраните результат в переменную `replacedText3`.
const replacedText3 = result.replaceAll(`клён`,`дуб`);

// 8. Найдите индекс первого вхождения слова `моря` в тексте и сохраните в переменную `index`.
const index = string.indexOf('моря');

// 9. Измените только первую букву в переменной `replacedText` на заглавную без использования регулярных выражений и сохраните результат в переменную `modifiedText`.
const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);

// 10. Выведите значения всех полученных переменных на экран.
// document.writeln(result, substring, newText, replacedText, replacedText2, replacedText3, index, modifiedText);

console.log(`1. Количество символов в тексте: ${string.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);