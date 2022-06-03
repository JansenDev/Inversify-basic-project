import { inject, injectable } from "inversify";
import { Pool } from "pg";
import { DependencyA, DependencyB } from "./dependencies";
import { pool } from "./dependencies";

@injectable()
export class Service {
  protected depA: DependencyA;
  protected depB: DependencyB;

  constructor(
    @inject(DependencyA) dependecyA: DependencyA,
    @inject(DependencyB) dependencyB: DependencyB
  ) {
    this.depA = dependecyA;
    this.depB = dependencyB;
  }

  public getAllNames(): string[] {
    return [this.depA.getName(), this.depB.getName()];
  }
}

@injectable()
export class myService {
  protected pool: Pool;
  constructor(@inject(Pool) pool: Pool) {
    this.pool = pool;
  }

  async testConnection() {
    const data = await this.pool.query("SELECT * FROM docker;");
    await pool.end();
    return data.rows;
  }
}
