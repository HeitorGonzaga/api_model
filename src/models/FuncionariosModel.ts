import IFuncionarios from '../interfaces/IFuncionarios';
import DataBase from '../database/Database';
import Postgresql from '../database/Postgresql';

class FuncionariosModel implements DataBase<IFuncionarios>{

  private static instance: FuncionariosModel;

  private constructor() {
  }

  async findById(id: number): Promise<IFuncionarios> {
    try{
      const {rows, rowCount} = await Postgresql.
        getInstance().
        client.query(`select * from funcionarios where id = $1`, [id]);
      if(!rows){
        throw new Error();
      }
      return rows[0];
    }catch(err){
      throw new Error("Erro na busca por ID");      
    }
  }
  
  async get(): Promise<IFuncionarios[]> {
    try {
      const sResult = await Postgresql.getInstance().client.query('select * from funcionarios');
      return sResult.rows;
    } catch (err) {
      return [];
    }
  }

  async add(object: IFuncionarios): Promise<void> {
    try{
      const sResult = await Postgresql.getInstance().client.query(`
        insert into 
          funcionarios
            (empresa, nome, data_nascimento, salario)
          values($1, $2, $3, $4)
        `, [object.empresa, object.nome, object.data_nascimento, object.salario]);
    }catch(err){
      throw new Error(`Erro ao realizar insert ${err}`);
    }
  }

  async delete(id: number): Promise<void> {
    try{
      await Postgresql.getInstance().client.query('delete from funcionarios where id = $1', [id]);
    }catch(err){
      throw new Error(`Erro ao tentar realizar exclusão do ID ${id}, ${err}`);
    }
  }

  async update(object: IFuncionarios): Promise<void> {
    try{
      const sResult = await Postgresql.getInstance().client.query(`
        update 
          funcionarios
            set 
              empresa = $1, 
              nome = $2, 
              data_nascimento = $3, 
              salario = $4
            where 
            id = $5
        `, [object.empresa, object.nome, object.data_nascimento, object.salario, object.id]);
    }catch(err){
      throw new Error(`Erro ao realizar Update ${err}`);
    }
  }

  public static getInstance(): FuncionariosModel {
    if (!this.instance) {
      FuncionariosModel.instance = new FuncionariosModel();
    }
    return FuncionariosModel.instance;
  }
}

export default FuncionariosModel;