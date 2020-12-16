import IBase from './IBase';
// 基础类型
export default class BasicTypes implements IBase{
    // boolean 类型
    isFlag: boolean = false;

    numberTest() {
        // number 类型 ---> 同 ES(二进制、八进制、十进制、十六进制) + bigint (TS 独有)
        const binary: number = 0b1010; // 二进制 10
        const octal: number = 0o744; // 八进制 484
        const decimal: number = 6; // 十进制 --> 同样是 ts 中的 number 6
        const hex: number = 0xf00d; // 十六进制 61453
        // 目标低于 ES2020 时，bigInt 文本不可用。ts(2737) ---> 更新 tsconfig.json 中的 "target": "esnext"
        // bigint 类型能够解决整数计算的精度问题（在计算超出了最大整数  2^53 - 1 = 9007199254740991 时，保证仍然能够准确计算）
        // 标志性就是尾部均带 n （运算双方）
        const big: bigint = 100n; // 100n
        console.log(binary, octal, decimal, hex, big);
        console.log(big + 1n);
    }

    stringTest() {
        // string 类型
        let color: string = "blue";
        color = "red";
        console.log(color);
        // 1. 同样可以使用 es6 模板语法
        const fullName: string = "Bob Bobbington";
        const age: number = 17;
        const descibe: string = `我的名字叫${fullName}，\n我明年就要${
            age + 1
        }岁啦~`;
        console.log(descibe);
    }

    arrayTest() {
        // array 类型
        // 1. 有两种声明数组的方式
        //(1) [] 后跟元素类型
        const list1: number[] = [1, 2, 3];
        //(2) 通用数组类型 Array<类型>
        const list2: Array<number> = [4, 5, 6];
        console.log(list1, list2);
    }

    tupleTest() {
        // 元组类型
        let x: [string, number];

        // 1. 当访问具有已知索引的元素时，将检索正确的类型：

        // x = [11, "haha"]; 提示类型不匹配对应的元祖类型
        x = ["haha", 11];
        console.log(x);
        console.log(x[0].length);

        // 2. 访问一组已知索引之外的元素失败，并显示以下错误：

        // x = ["haha", 11,100];
        // 提示不能将类型“[string, number, number]”分配给类型“[string, number]”。源具有 3 个元素，但目标仅允许 2 个。ts(2322)
        // console.log(x[1].length) 提示类型“number”上不存在属性“length”。ts(2339)
        //console.log(x[2]); 提示长度为 "2" 的元组类型 "[string, number]" 在索引 "2" 处没有元素。ts(2493)
    }

    enumTest() {
        // 枚举类型
        enum Color {
            // 1. 首元素如果没有赋值，则默认值为 0 。且后续元素根据首元素默认值自动递增
            Red, // 0
            Yellow, // 1
            Blue, // 2
        }
        const color = Color.Red;
        console.log(color, Color.Yellow, Color.Blue);
        enum Color1 {
            Red = 1, // 1
            Yellow, // 2
            Blue, // 3
        }
        // 2. 采用下标的取法可以取到对应枚举值的名称，如果没有则为 undefined
        const color2 = Color1[2];
        const color3 = Color1[4];
        console.log(color2, Color1.Yellow, Color1.Blue, color3);
    }

    unknownTest() {
        // unknown 类型
        // 1. 我们可能需要描述编写应用程序时不知道的变量类型,我们需要一种类型能够告诉编译器和将来的读者此变量可以是任何变量
        let notSure: unknown = 4;
        notSure = "123123";
        notSure = false;
        console.log(notSure);
    }

    anyTest() {
        // any 类型
        // 1. any 类型是类似于现有的 js ，可以进出类型检查的编译期间
        // 2. 与 unknown 相比，any 允许访问任意属性（即使该属性不存在），该属性包括函数，并且 ts 不会检查他们的存在或者类型
        let looselyTyped: any = 4;
        looselyTyped.toFixed(); // 此属性上并不存在该方法，但因为 any 类型的，编译器不会报错
        // let d = looselyTyped.a.b.c.d;
        // any 还可以通过不严谨的对象继续污染给其他变量，同样因为是 any 类型，所以编译器不会报错
        // 但是因为 looselyTyped 并没有 a,b,c,d 属性，所以均默认为 undefined
        // 因此会在运行时报错， b 不能从 a 的 undefined 里取出
        let strictlyTyped: unknown = 4;
        // strictlyTyped.toFixed(); 提示对象的类型为 "unknown"。ts(2571)
        console.log(strictlyTyped);
        // 3. 所有 any 的便利都以失去类型安全性为代价。
        // 类型安全是使用 TS 的主要目的之一，因此应该尽量避免在不必要时使用 any
    }

    voidTest() {
        // void 类型
        // 1. void 有点与 any 相反：根本没有任何类型。您可能通常将其视为不返回值的函数的返回类型
        const warnUser = (): void => {
            console.log("这是一条 warning 消息");
        };
        warnUser();
        //2. 为变量声明 void 类型是没有用的，因为只能分配 undefined 或 null(仅在--strictNullChecks未指定的情况下) 给它
        let unsable: void = undefined;
        // unsable = null 提示不能将类型“null”分配给类型“void”。ts(2322)
        console.log(unsable);
    }

    nullAndUndefinedTest() {
      // null 与 undefined 类型
      // 1. 默认情况下，null 和 undefined 是所有其他类型的子类型，这就意味着可以像 number 一样，分配 null 和 undefined
    }

    run() {
        this.numberTest();
        this.stringTest();
        this.tupleTest();
        this.enumTest();
        this.unknownTest();
        this.anyTest();
        this.voidTest();
        this.nullAndUndefinedTest();
    }
}
