import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

declare var process: {
  env: {
    SECRET: string;
  };
};

class AuthCtrl {
  public async auth(request: Request, response: Response) {
    if (
      request.body.user === "administrador@endevs.com.br" &&
      request.body.password === "z.Xw3NvqIO7Z"
    ) {
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 30000000, // Tempo de Expiração do Token - Alterar para produção
      });
      return response.json({ auth: true, token: token });
    }
    response.status(500).json({ message: "Login inválido!" });
  }
}

export default new AuthCtrl();
