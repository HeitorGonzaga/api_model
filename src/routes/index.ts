import { Router } from "express";
import authRoute from "./AuthRoutes";
import funcionariosRoute from "./FuncionariosRoutes";
import token from "../middleware/TokenMiddleware";

const rotas = Router();

//Rotas de autenticação e middleware de verificação de token
rotas.use("/v1", authRoute);
rotas.use(token);

//Definição das rotas
rotas.use("/v1/funcionarios", funcionariosRoute);

export default rotas;
