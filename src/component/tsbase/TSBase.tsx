import { Button } from "antd";
import * as React from "react";
import IBase from "./IBase";
import BasicTypes from "./BasicTypes";
import InterfaceTest from "./InterfaceTest";
import BasicDecorators from "./BasicDecorators";

export default class TSBase extends React.Component {
    // 初始化各个类
    state = {
        currentSelected: "",
    };
    changeCurrentSelected(name: string) {
        this.setState(
            {
                currentSelected: name,
            },
            () => this.initInstantiations(name)
        );
    }
    initInstantiations(name: string) {
        let instance: IBase;
        switch (name) {
            case "basicTypes":
                instance = new BasicTypes();
                break;
            case "interfaceTest":
                instance = new InterfaceTest();
                break;
            case "decorators":
                instance = new BasicDecorators();
                break;
        }
        instance!.run();
    }
    public render() {
        return (
            <div>
                <Button
                    style={{ marginRight: "10px" }}
                    type="primary"
                    onClick={() => this.changeCurrentSelected("basicTypes")}
                >
                    基础类型
                </Button>
                <Button
                    style={{ marginRight: "10px" }}
                    onClick={() => this.changeCurrentSelected("interfaceTest")}
                >
                    接口
                </Button>
                <Button
                    style={{ marginRight: "10px" }}
                    type="primary"
                    onClick={() => this.changeCurrentSelected("decorators")}
                >
                    装饰器
                </Button>
                <h4>打开控制台查看结果</h4>
            </div>
        );
    }
}
