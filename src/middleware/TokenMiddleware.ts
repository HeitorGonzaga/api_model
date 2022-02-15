import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare var process: {
  env: {
    SECRET: string;
  };
};

export default (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers["x-access-token"];
  if (!token)
    return response
      .status(401)
      .json({ auth: false, message: "Token Não Informado!" });

  jwt.verify(token as string, process.env.SECRET, function (err, decoded) {
    if (err)
      return response
        .status(500)
        .json({ auth: false, message: "Falha na Autenticação do Token!" });

    next();
  });
};
