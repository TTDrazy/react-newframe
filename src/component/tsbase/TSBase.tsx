import { Button } from "antd";
import * as React from "react";
import IBase from "./IBase";
import BasicTypes from "./BasicTypes";

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
        }
        instance!.run();
    }
    public render() {
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => this.changeCurrentSelected("basicTypes")}
                >
                    基础类型
                </Button>
                <h4>打开控制台查看结果</h4>
            </div>
        );
    }
}
