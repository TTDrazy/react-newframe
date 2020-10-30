import * as React from 'react'
import Validator from '../../component/validator/Validator'

export interface IValidatorDemoProps {}

export default class ValidatorDemo extends React.Component<
  IValidatorDemoProps
> {
  public render() {
    return (
      <div>
        <Validator></Validator>
      </div>
    )
  }
}
