import { Client } from "pg";
import * as dotenv from "dotenv";

export default class Posgresql {
  client: Client;
  private static instance: Posgresql;

  constructor() {
    dotenv.config();
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: parseInt(process.env.PGPORT || '5432')
    });
    client.connect();
    this.client = client;
  }

  public static getInstance(): Posgresql {
    Posgresql.instance = new Posgresql();
    return Posgresql.instance;
  }

}