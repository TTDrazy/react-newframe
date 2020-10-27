import * as React from 'react';
import {Button} from 'antd'
import { observer } from "mobx-react"
import PriceService from "../service/PriceService"

export default class Home extends React.Component {
  constructor(priceService){
    priceService = new PriceService()
  }
  public render() {
    const priceList = observer()
    return (
      <div>
        <Button type="primary">test</Button>
      </div>
    );
  }
}
