import { Request, Response } from "express";
import FuncionariosModel from "../models/FuncionariosModel";


class FuncionariosCtrl {
  
  public async get(request: Request, response: Response) {
    try {
      const sResult = await FuncionariosModel.getInstance().get();
      return response.status(200).json(sResult);
    } catch (err) {
      return response.status(400).json({ msg: err });
    }
  }

  public async add(request: Request, response: Response) {
    const {nome, data_nascimento, salario, empresa} = request.body;

    if(!nome) return response.status(400).json({msg: 'Campo Nome deve ser preenchido!'});
    if(!data_nascimento) return response.status(400).json({msg: 'Campo Data Nascimento deve ser preenchido!'});
    if(!salario) return response.status(400).json({msg: 'Campo Salário deve ser preenchido!'});
    if(!empresa) return response.status(400).json({msg: 'Campo Empresa deve ser preenchido!'});

    try {
      const sResult = await FuncionariosModel.getInstance().add({nome, data_nascimento, salario, empresa});
      return response.status(200).send();
    } catch (err) {
      return response.status(400).json({ msg: err });
    }
  }

  public async delete(request: Request, response: Response) {
    const {id} = request.params;
    if(!id)return response.status(400).json({msg: 'Campo Id deve ser preechido!'});

    try{
      await FuncionariosModel.getInstance().delete(Number(id));
      return response.status(200).send();
    }catch(err){
      return response.status(400).json({msg: err})
    }
  }

  public async update(request: Request, response: Response) {
    const {id} = request.params;
    const {nome, data_nascimento, salario, empresa} = request.body;

    if(!id) return response.status(400).json({msg: 'Campo Id deve ser preenchido!'});
    if(!nome) return response.status(400).json({msg: 'Campo Nome deve ser preenchido!'});
    if(!data_nascimento) return response.status(400).json({msg: 'Campo Data Nascimento deve ser preenchido!'});
    if(!salario) return response.status(400).json({msg: 'Campo Salário deve ser preenchido!'});
    if(!empresa) return response.status(400).json({msg: 'Campo Empresa deve ser preenchido!'});

    try {
      const ifExist = await FuncionariosModel.getInstance().findById(Number(id));
      if(!ifExist) return response.status(400).json({msg: 'Funcionário não localizado!'});
      await FuncionariosModel.getInstance().update({id: Number(id), nome, data_nascimento, salario, empresa});
      return response.status(200).send();
    } catch (err) {
      return response.status(400).json({ msg: err });
    }
  }
}

export default new FuncionariosCtrl();
