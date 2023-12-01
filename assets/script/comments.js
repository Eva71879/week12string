'use strict';

const inputName = document.querySelector ('.inputName');
const outputName = document.querySelector ('.aside__outputName');
const name = inputName.value;

// - под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;

   function postName () {
    if (inputName.value.trim().length) {
        outputName.innerText = inputName.value;
        inputName.value = '';
        outputName.innerHTML = outputName.innerText.toLowerCase();
        outputName.innerHTML = outputName.innerText.charAt(0).toUpperCase() + outputName.innerText.slice(1);
    }
    else if (inputName.value === '') {
        outputName.innerText = "Username";
    }
    }

    function postAvatar () {
        const inputAvatar = document.querySelector ('.inputAvatar');
        const outputAvatar = document.querySelector ('.aside__outputAvatar');
        
        const avatar1 = 'assets/icons/chicken-svgrepo-com.svg';
        const avatar2 = 'assets/icons/hedgehog-svgrepo-com.svg';
        const avatar3 = 'assets/icons/keroppi-svgrepo-com.svg';
        const avatar4 = 'assets/icons/mouse-svgrepo-com.svg';
        const avatar5 = 'assets/icons/zebra-svgrepo-com.svg';
        const allAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
        const randomAvatar = Math.floor(Math.random() * allAvatars.length);

        if (inputAvatar.value === '') {
            outputAvatar.style.opacity = 1;
            outputAvatar.src = allAvatars[randomAvatar];  
        }

        else if (inputAvatar.value.trim().length) {    
            outputAvatar.src = inputAvatar.value;
            inputAvatar.value = '';
}
    }

    const outputComment = document.querySelector ('.aside__outputComment');

    function postComment () {
        const inputComment = document.querySelector ('.main__inputComment');
        
        const commentTime = document.querySelector ('.aside__commentTime');

        const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
    };
    const setCommentDate = new Date().toLocaleString("ru", options);
    const now = new Date();
    const setCommentTime = now.toLocaleTimeString();
    const setCommentDateAndTime = `Комментарий добавлен ${setCommentDate} в ${setCommentTime}`;

        if (inputComment.value.trim().length) {
        outputComment.innerText = inputComment.value;
        inputComment.value = '';
        commentTime.innerText = setCommentDateAndTime;
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

// - напротив аватара и имени должна появляться дата когда и во сколько был написан комментарий;
// - под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;
// - если пользователь не указал имя, то вместо имени должно появляться `username` ;
// - если пользователь не ввел ссылку на аватар, то должна появляться стандартная аватарка. Стандартных аватаров должно быть больше пяти, они должны подставляться в рандомном порядке.