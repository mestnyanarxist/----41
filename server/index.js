//Константы
const { fontSize } = require("@mui/system");
const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

//Добавление пути до директории
app.use(express.static(path.join(__dirname, 'module')))

//Функция прослушки порта
app.listen(port, () => {
    console.log(`Server was starting. Server port: ${port}`);
});

//Функция записи сообщений в сервер
app.get("/", (req, res) => {
    //res.send("Hello World!");
    //Функция отправки в сервер файла
    res.sendFile( `${__dirname}/module/DashboardLayout/index.html`)
});
