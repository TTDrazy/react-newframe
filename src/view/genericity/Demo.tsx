import * as React from 'react'
import ExtendGenericity from '../../component/genericity/ExtendGenericity'
import Genercity from '../../component/genericity/Genericity'

export default class Demo extends React.Component {
  public render() {
    return (
      <div>
        <Genercity></Genercity>
        <ExtendGenericity></ExtendGenericity>
      </div>
    )
  }
}
