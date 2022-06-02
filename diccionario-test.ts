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

function getProducts() {
  const get_products = products;
  const diccionario: any = { length: 0 };

  for (let index = 0; index < get_products.length; index++) {
    const product = get_products[index];

    if (!diccionario.hasOwnProperty(product.categoria)) {
      diccionario[product.categoria] = [];
      diccionario[product.categoria].push(product);
      diccionario.length++;
    } else {
      diccionario[product.categoria].push(product);
    }
  }

  return diccionario;
}

const test = { length: 0 };

// const hashProducts: myPartial<TDictionary<IProduct[]>> = getProducts();
const hashProducts: myRecord<string, []> = getProducts();
//^ agrega objecto com key
const hashProducts2: myPartial2<typeof test, IProduct[]> = getProducts();

// console.log(hashProducts["1"]);
// console.log(hashProducts.hasOwnProperty("1"));
console.log(hashProducts2.hasOwnProperty("1"));
console.log(hashProducts2);

type myPartial2<O, I> = {
  [K in keyof O]-?: I;
};
// & {
//   length: number;
// };

type myRecord<T extends keyof any, I> = {
  [P in T]: I;
};


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
type TDictionary<T> = {
  length: number;
} & {
  [key: string]: T;
};
