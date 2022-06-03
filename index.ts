import "reflect-metadata";
import DIContainer from "./src/service/container/inversify";
// import { Service, myService } from "./src/service/service";
import { myService, Service } from "./src/service/service";
import { pool } from "./src/service/dependencies";

const service = DIContainer.resolve<Service>(Service);
const myservice = DIContainer.resolve<myService>(myService);

console.log(service.getAllNames());

console.log();

async function test() {
  const data = await myservice.testConnection();
  console.log(data);
}

// async function test() {
//   const data = await pool.query("SELECT * FROM docker;");
//   console.log(data.rows);
// }

test();
