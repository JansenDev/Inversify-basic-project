import "reflect-metadata";
import DIContainer from "./src/service/container/inversify";
import { Service } from "./src/service/service";

const service = DIContainer.resolve<Service>(Service);

console.log(service.getAllNames());
