//require("dotenv/config");
import "./database/Postgresql";
import express from "express";
import rotas from "./routes/index";
import cors from "cors";
import bodyParser from "body-parser";
import cron from 'node-cron';

const app = express();

//Criando Agendamento de Serviços
cron.schedule("*/25 * * * *", () => {
  //Caso Existam tarefas a serem executas em segundo plano como serviço.
});

//Configurando Cors
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/static", express.static("public"));
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

//Routes
app.use(rotas);

export default app;
