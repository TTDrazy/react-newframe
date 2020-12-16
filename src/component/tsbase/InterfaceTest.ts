import IBase from "./IBase";

interface ISquareConfig {
    // 1. 可选属性
    color?: string;
    width: number;
}

const createSquare = (config: ISquareConfig): { color: string } => {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
};

const createSquare2 = (
    config: ISquareConfig
): { color: string; area: number } => {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
};

interface IPoint {
    // 2. 只读属性
    readonly x: number;
    readonly y: number;
}

export default class InterfaceTest implements IBase {
    optionalProp = () => {
        let mySquare = createSquare({ width: 30 });
        console.log(mySquare);
    };

    readonlyProp = () => {
        // (1) 只读属性必须在其声明或构造函数中进行初始化
        let p1: IPoint = { x: 10, y: 20 };
        // p1.x = 5; 提示 无法分配到 "x" ，因为它是只读属性。ts(2540)
        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a;
        // ro[0] = 12 提示 类型“readonly number[]”中的索引签名仅允许读取。ts(2542)
        // ro.push(5); 提示 类型“readonly number[]”上不存在属性“push”。ts(2339)
        // a = ro 提示 类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。ts(4104)
        // (2) 即使将整个 ReadonlyArray 数组分配回普通数组也是非法的,但是仍然可以用 类型断言 来覆盖它
        a = ro as number[];

        // (3) readonly 与 const
        // 变量使用 const ，属性使用 readonly
        // 使用时记住：需要声明时直接赋值的用 const ，可以在声明后暂缓赋值的用 readonly
    };

    excessPropertyChecks = () => {
      let mySquare = createSquare({ width: 30 });
      console.log(mySquare);
  };

    run() {
        this.optionalProp();
        this.readonlyProp();
        this.excessPropertyChecks()
    }
}
