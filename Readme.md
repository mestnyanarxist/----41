Описание работы:
1) Установлен по гайду express.js: https://expressjs.com/en/starter/installing.html
2) Создана папка в server в корне проекта
3) В папке server создан файл index.js
4) В файле index.js вписан следующий код:
//Константы
const express = require("express");
const app = express();
const port = 3000;

//Функция прослушки порта
app.listen(port, () => {
    console.log(`Server was starting. Server port: ${port}`);
});

//Функция записи сообщений в сервер
app.get("/", (req, res) => {
    res.send("Hello World!");
});
5) В терминале прописана команда:
nodeserver/index.js
6) В браузере вызван URL: https://localhost:3000
7) В файл package.json добавлен скрипт, чтобы его вызывать с помощью команды npm run:
"scripts":{
    "start_server": "node server/index.js"
}

Ответы на вопросы:
1) Node.js в основном используется для создания быстрых и масштабируемых веб-приложений. При этом используется управляемая событиями неблокирующая модель ввода-вывода, что делает эту платформу простой и эффективной. Это отличное решение для разработки приложений реального времени, обрабатывающих большие объемы данных и выполняющихся на распределенных устройствах.
2) ExpressJS-это фреймворк веб-приложений, который предоставляет простой API для создания веб-сайтов, веб-приложений и бэк-эндов.
3) Ссылочные функции:
> Отличия от обычных:
- нет ключевого слова "function";
- не имеют собственного контекста выполнения, т.е. наследует контекст от предыдущих функций, создавших ее.
> синтаксис: (переменные) => { тело функции }