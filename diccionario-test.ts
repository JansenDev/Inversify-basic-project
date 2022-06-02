const products = [
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
  }
];

function getProducts() {
  const get_products = products;
  const diccionario: myInterface = { size: 0 };
  const IOptions = [];

  for (let index = 0; index < get_products.length; index++) {
    const product = get_products[index];

    if (!diccionario.hasOwnProperty(product.categoria)) {
      diccionario[product.categoria] = [];
      diccionario[product.categoria].push(product);
      IOptions.push(product.categoria);
    } else {
      diccionario[product.categoria].push(product);
    }
  }
  console.log(IOptions);

  return diccionario;
}
// getProducts();
console.log(getProducts());

export type IDiccionario = {
  size: number;
} & {
  [key: string]: any;
};

export type Implements<T, R extends T> = R;
export type myInterface = Implements<
  { [key: string]: unknown },
  { size: number }
>;
