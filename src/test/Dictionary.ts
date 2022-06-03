export class Grouping {
  length: number = 0;
  private pop: Function = () => {};
  //   private objectoList;

  constructor(private objectoList: any) {
    // this.objectoList = objectoList;
  }

  //   ^get data
  get(key: string): TDictionary<any> {
    if (key) {
      return this.objectoList[key];
    }
    return this.objectoList;
  }

  //   ^agrupar
  grouping(key: any): TDictionary<any> {
    const dictionary: any = { ...this.properties() };

    for (let index = 0; index < this.objectoList.length; index++) {
      const objecto = this.objectoList[index];
      //^ Si el valor que se convertira en key es null o vacio
      if (objecto[key] !== null || objecto[key] !== "") {
        //^ Si no existe propiedad la crea
        if (!dictionary.hasOwnProperty(objecto[key])) {
          dictionary[objecto[key]] = [];
          dictionary[objecto[key]].push(objecto);
          this.length++;
          dictionary.length++;
        } else {
          dictionary[objecto[key]].push(objecto);
        }
      }
    }
    this.objectoList = dictionary;
    return this.objectoList;
  }

  private popObjectList() {
    console.log("this.entryLastDictionary()");
    // console.log(Object.keys(this.objectoList));
    const lastValue = this.lastValueDictionary();

    if (lastValue) {
      const popResult: TDictionary<any> = this.objectoList[lastValue];
      delete this.objectoList[lastValue];
      this.length = this.length - 1;
      this.objectoList.length--;
      console.log(this.length);

      return popResult;
    }
  }

  private lastValueDictionary() {
    const values = Object.keys(this.objectoList);
    if (values.length > 0) {
      const valueLast = values[values.length - 1];

      return valueLast;
    }
    return null;
  }
  private properties() {
    return {
      length: this.length,
      pop: this.popObjectList.bind(this)
    };
  }
}

export type TDictionary<T> = {
  length: number;
  pop: Function;
} & {
  [key: string]: T;
};
