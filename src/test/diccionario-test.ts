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

let dict_memory: TDictionary<IProduct[]> = {} as TDictionary<IProduct[]>;

function groupingProductsBy(key: keyof IProduct): TDictionary<IProduct[]> {
  const get_products = products;
  const dictionary: any = {
    length: 0,
    popp: (key: keyof IProduct) => {
      // delete dict_memory[key];
      console.log(dict_memory);
      console.log(key);

      return dict_memory;
    }
  };

  for (let index = 0; index < get_products.length; index++) {
    const product = get_products[index];

    //^ Si el valor que se convertira en key es null o vacio
    if (product[key] !== null || product[key] !== "") {
      //^ Si no existe propiedad la crea
      if (!dictionary.hasOwnProperty(product[key])) {
        dictionary[product[key]] = [];
        dictionary[product[key]].push(product);
        dictionary.length++;
      } else {
        dictionary[product[key]].push(product);
      }
    }
  }

  return dictionary;
}
groupingProductsBy('categoria')

const popp = (key: keyof IProduct) => {
  // delete dict_memory[key];
  console.log(dict_memory);
  console.log(key);

  return dict_memory;
};

// Probando

const productsDict = groupingProductsBy("id_products");

// console.log(productsDict.hasOwnProperty("1"));
// console.log(productsDict.length);
console.log(productsDict.popp("3"));
// console.log(productsDict);
// const get_product_cat_1 = productsDict["1"];
// console.log(productsDict);

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

export type TDictionary<T> = {
  length: number;
  popp: Function;
} & {
  [key: string]: T;
};
