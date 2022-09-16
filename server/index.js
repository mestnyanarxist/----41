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
