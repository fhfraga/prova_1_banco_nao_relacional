const express = require("express");
const app = express();
const userRoutes = require("../src/routes/userRoutes");
const path = require('path'); 
const PORT = 3000;


const ConnectMongoDB = require("./database/database");
ConnectMongoDB()


app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor está conectado na porta  ${PORT}`);
});

