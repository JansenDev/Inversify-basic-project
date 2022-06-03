import { Grouping, TDictionary } from "./Dictionary";
interface IProduct {
  id_products: number;
  descripcion: string;
  price: number;
  data1: string;
  data2: string;
  data3: string;
  data4: string;
  categoria: number;
}

const products: IProduct[] = [
  {
    id_products: 1,
    descripcion: "MILK",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 1
  },
  {
    id_products: 2,
    descripcion: "COLA",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 1
  },
  {
    id_products: 3,
    descripcion: "chele",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 1
  },
  {
    id_products: 3,
    descripcion: "chele",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 2
  },
  {
    id_products: 3,
    descripcion: "chele",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 2
  },
  {
    id_products: 3,
    descripcion: "chele",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 3
  },
  {
    id_products: 3,
    descripcion: "chele",
    price: 25.6,
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    categoria: 4
  }
];

const g: Grouping = new Grouping(products);
const dict: TDictionary<IProduct[]> = g.grouping("descripcion");
// const x: TDictionary<IProduct[]> = g.get();

// console.log(dict);
// console.log(g);
let x = dict.pop()
 dict.pop()
 dict.pop()
//  console.log( dict.pop());

console.log(dict);

// console.log(x);

// console.log(dict.length);

