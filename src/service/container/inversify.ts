import { Container } from "inversify";
import { DependencyA, DependencyB } from "../dependencies";
import { pool, Pool } from "../dependencies";

var DIContainer = new Container();

DIContainer.bind<DependencyA>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<Pool>(Pool).toConstantValue(pool);

export default DIContainer;
