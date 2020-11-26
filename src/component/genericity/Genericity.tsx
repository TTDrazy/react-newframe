import * as React from 'react'




export default class Genercity extends React.Component {
  public render() {
    return (
      <div>
        <div>首先我有三个实体类型：人员、文章、分类</div>
        <div>这三个实体类型都含有相对应的增删改查 api 层</div>
        <div>那么对于这个都具有相似功能的 api 层就可以抽为泛型类来使用</div>
        <div>其间所用到的 VO、DTO 也都是用泛型来表示的</div>
      </div>
    )
  }
}
