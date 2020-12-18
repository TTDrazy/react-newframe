import IBase from "./IBase";

interface ISquareConfig {
    // 1. 可选属性
    color?: string;
    width: number;
    // 为了增加索引 --->  可以拥有除了 color,width 之外的任意数量的其他属性
    [propNmae: string]: any;
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
console.log(createSquare2);

interface IPoint {
    // 2. 只读属性
    readonly x: number;
    readonly y: number;
}

const createSquare3 = (
    config: ISquareConfig
): { color: string; area: number } => {
    return {
        color: config.color || "blue",
        area: config.width ? config.width * config.width : 30,
    };
};

// 为了描述带有接口的函数类型，我们给接口一个调用签名
// 这就像只声明参数列表和返回类型的函数声明
// 参数列表中每个参数都需要名称和类型
interface ISearchFunc {
    (source: string, subDtring: string): boolean;
}

interface IStringArray {
    [index: number]: string;
}

interface IAnimal {
    name: string;
}

interface IDog extends IAnimal {
    eat: string;
}

interface INotOkay {
    // [x: number]: IAnimal; 提示 数字索引类型“IAnimal”不能赋给字符串索引类型“IDog”。ts(2413)
    [x: string]: IDog;
}

export default class InterfaceTest implements IBase {
    optionalProp = () => {
        let mySquare = createSquare({ width: 30 });
        console.log(mySquare);
    };

    readonlyProp = () => {
        // (1) 只读属性必须在其声明或构造函数中进行初始化
        let p1: IPoint = { x: 10, y: 20 };
        console.log(p1);
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
        // 3. 多余属性检查
        // let mySquare = createSquare3({ color2: "yellow", width: 20 }); // 故意出错，考验容错性（普通 js 不会报错）
        // 提示 类型“{ color2: string; width: number; }”的参数不能赋给类型“ISquareConfig”的参数。
        // 对象文字只能指定已知的属性，但“color2”中不存在类型“ISquareConfig”。是否要写入 color?ts(2345)

        // let mySquare = createSquare3({width:50,opciaty:0.5})
        // 提示 类型“{ width: number; opciaty: any; }”的参数不能赋给类型“ISquareConfig”的参数。
        // 对象文字可以只指定已知属性，并且“opciaty”不在类型“ISquareConfig”中。ts(2345)

        // 解决方式：
        // (1) 使用类型断言
        let mySquare = createSquare3({
            width: 50,
            opciaty: 0.5,
        } as ISquareConfig);
        // (2) 为约束类型添加字符串索引签名 （如果您确定对象可以具有某些以特殊方式使用的额外属性，则更好的方法可能是添加字符串索引签名）
        let mySquare2 = createSquare3({
            width: 50,
            opciaty: 0.5,
        });
        let mySquare3 = createSquare3({ color3: "red", width: 30 });
        // (3) 将对象分配给另一个变量
        // 是因为 squareOptions 不会进行过多的属性检查，因此编译器不会提示错误
        let squareOptions = { colour: "red", width: 100 };
        let mySquare4 = createSquare(squareOptions);
        // 但是，如果变量没有任何公共对象属性，它将失败。
        let squareOptions2 = { colour: "red" };
        // let mySquare5 = createSquare(squareOptions2);
        console.log(squareOptions2);
        // 提示 类型“{ colour: string; }”的参数不能赋给类型“ISquareConfig”的参数。
        // 类型 "{ colour: string; }" 中缺少属性 "width"，但类型 "ISquareConfig" 中需要该属性。ts(2345)
        console.log(mySquare, mySquare2, mySquare3, mySquare4);

        // 请记住，对于上述简单代码，您可能不应该试图“绕开”这些检查。
        // 对于具有方法和保持状态的更复杂的对象常量，您可能需要牢记这些技术，但是大多数多余的属性错误实际上是错误。
        // 这意味着如果你遇到了多余的属性检查问题，比如选项包，你可能需要修改你的一些类型声明。
        // 在这种情况下，如果可以将同时具有color或colour属性的对象传递给createSquare，则应该修正的定义SquareConfig以反映这一点。
    };

    functionTypes = () => {
        // 4. 功能类型
        // 能够约束函数的类型
        let mySearch: ISearchFunc;
        mySearch = (src: string, sub: string): boolean => {
            const result = src.search(sub);
            return result > -1;
        };
        mySearch("hello", "lo");
    };

    indexableTypes = () => {
        // 5. 可索引类型
        // 可索引类型具有索引签名，改签名描述了可用于索引对象的类型，以及建立索引时对应的返回类型
        let myArray: IStringArray;
        myArray = ["bob", "fred"];

        let myStr: string = myArray[0];
        console.log("myStr", myStr);
    };

    run() {
        this.optionalProp();
        this.readonlyProp();
        this.excessPropertyChecks();
        this.indexableTypes();
    }
}
