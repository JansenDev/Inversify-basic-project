import { inject, injectable } from "inversify";
import { Pool, QueryResult } from "pg";
import { DependencyA, DependencyB, ClaseConnect } from "./dependencies";
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
  private pool: Pool;
  constructor(@inject(ClaseConnect) connection: ClaseConnect) {
    this.pool = connection.connect();
  }

  async testConnection() {
    const data: QueryResult<IDocker> = await this.pool.query(
      "SELECT * FROM docker;"
    );
    this.pool.end();
    return data.rows;
  }
}

interface IDocker {
  id_docker: number;
  title: string;
}
