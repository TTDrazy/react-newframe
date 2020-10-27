import * as React from 'react';
import {Button} from 'antd'

export interface IHomeProps {
}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div>
        <Button type="primary">test</Button>
      </div>
    );
  }
}
