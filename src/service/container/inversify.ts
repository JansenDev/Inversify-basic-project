import { Container } from "inversify";
import { DependencyA, DependencyB } from "../dependencies";
import { pool, Pool, ClaseConnect } from "../dependencies";

var DIContainer = new Container();

DIContainer.bind<DependencyA>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<ClaseConnect>(ClaseConnect).toSelf();

export default DIContainer;
