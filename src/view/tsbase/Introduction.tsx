import * as React from "react";

export interface IIntroductionProps {}

export default class Introduction extends React.Component<IIntroductionProps> {
    public render() {
        return (
            <div>
                <h2>重新回顾 ts 基础</h2>
                <div>
                    <a href="https://www.typescriptlang.org/docs/handbook/intro.html">
                        参照官方文档
                    </a>
                </div>
                <div>
                    <a href="https://app.yinxiang.com/fx/34af4b2e-42ae-4da1-b697-f282df4dc0dd">
                        整理的文字笔记
                    </a>
                </div>
                <div>主要包含 handbook 中的</div>
                <ul>
                    <li>Basic Types - 基本类型</li>
                    <li>interfaces - 接口</li>
                    <li>functions - 函数、方法</li>
                    <li>literal types - 文字类型</li>
                    <li>unions and intersection types - 联合与相交类型</li>
                    <li>classes - 类</li>
                    <li>enum - 枚举</li>
                    <li>generics - 泛型</li>
                </ul>
            </div>
        );
    }
}
