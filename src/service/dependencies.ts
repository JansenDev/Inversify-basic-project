import { injectable } from "inversify";
import { Pool, PoolConfig } from "pg";
@injectable()
export class DependencyA {
  private readonly name: string = "dependencyA";

  public getName(): string {
    return this.name;
  }
}

@injectable()
export class DependencyB {
  private readonly name: string = "dependencyB";

  public getName(): string {
    return this.name;
  }
}

const config: PoolConfig = {
  user: "postgres",
  host: "localhost",
  database: "inversify",
  password: "12345",
  port: 5432,
  statement_timeout: 2000
};

const pool = new Pool(config);

export { pool, Pool };
