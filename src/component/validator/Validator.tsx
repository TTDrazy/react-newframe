import * as React from 'react';
import {Input,Button} from 'antd'
import { ValidatorService } from '../../service/validator/ValidatorService';

export interface IValidatorProps {
}

export default class Validator extends React.Component<IValidatorProps> {
  validatorService = new ValidatorService()
  state = {
    userData:[]
  }
  async componentDidMount(){
    let data = await this.validatorService.getList()
    this.setState({
      userData:data
    })
  }
  public render() {
    const {userData} = this.state
    return (
      <div>
        {
          userData.map((item)=>{
            <div>
              <div>{}</div>
            </div>
          })
        }
        <Input></Input>
        <Button>提交</Button>
      </div>
    );
  }
}
