import * as React from 'react';
import BasicTypes from './BasicTypes';

export default class TSBase extends React.Component{
  // 初始化各个类
  initInstantiations(){
    const basicTypes = new BasicTypes()
    basicTypes.run() 
  }
  public render() {
    this.initInstantiations()
    return (
      <div>
        打开控制台即可查看运行结果
      </div>
    );
  }
}
