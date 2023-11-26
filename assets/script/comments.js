'use strict';

const inputName = document.querySelector ('.inputName');
const outputName = document.querySelector ('.aside__outputName');
const name = inputName.value;

   function postName () {
    if (inputName.value.trim().length) {
        outputName.innerText = inputName.value;
        inputName.value = '';
        outputName.innerHTML = outputName.innerText.toLowerCase();
        outputName.innerHTML = outputName.innerText.charAt(0).toUpperCase() + outputName.innerText.slice(1);
    }
    }

    function postAvatar () {
        const inputAvatar = document.querySelector ('.inputAvatar');
        const outputAvatar = document.querySelector ('.aside__outputAvatar');
        if (inputAvatar.value.trim().length) {    
        outputAvatar.src = inputAvatar.value;
        inputAvatar.value = '';
    }
}

    function postComment () {
        const inputComment = document.querySelector ('.main__inputComment');
        const outputComment = document.querySelector ('.aside__outputComment');
        if (inputComment.value.trim().length) {
        outputComment.innerText = inputComment.value;
        inputComment.value = '';        
    }
}

    function checkSpam() {
        outputComment.innerHTML = outputComment.innerText.replace(/viagra/gi, '***');
        outputComment.innerHTML = outputComment.innerText.replace(/xxx/gi, '***');
    }

    const postAll = () => {
    postName ();
    postAvatar ();
    postComment ();
    checkSpam();
}

const buttonPostAll = document.querySelector('.button');
buttonPostAll.addEventListener('click', postAll);


// ***** Задание под звездочкой**

// Создадим сервис комментариев. В нём будет три поля ввода:

// - поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. 
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:
// const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// const comment2 = checkSpam('free xxx'); //результат free ***
// const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
