import IBase from "./IBase";

function f() {
    console.log("f() 运行了");
    return function (
        // 如果参数写的过少装饰器将无法使用
        target: any,// 当前类
        propertyKey: string, // 被调用的方法名
        descriptor: PropertyDescriptor
    ) {
        console.log("f() 被调用了", target, propertyKey, descriptor);
    };
}
function g() {
    console.log("g() 运行了");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("g() 被调用了", target, propertyKey, descriptor);
    };
}
export default class Decorators implements IBase {
    @f()
    @g()
    getComposition() {
        // 装饰器组合方式是：
        // 1. 每个装饰器的表达式从上到下进行求值
        // 2. 然后从下到上将结果作为函数调用
        // 结果依次是
        // f() 运行了
        // g() 运行了
        // g() 被调用了
        // f() 被调用了
    }

    run(): void {
        this.getComposition();
    }
}
