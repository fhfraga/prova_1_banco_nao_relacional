const mongoose = require('mongoose');

require("dotenv").config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

function connect() {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.zapmdol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("Conexão com o mongodb estabelecida com sucesso")
    }).catch(error => {
        console.log("Erro ao conectar o mongodb", error);
    });
}

module.exports = connect;
