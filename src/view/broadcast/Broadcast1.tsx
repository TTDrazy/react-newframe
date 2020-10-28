import * as React from 'react'
import { PriceServiceInstance, } from '../../service/broadcast/PriceService'
import { Input, Button } from 'antd'
import { observer } from 'mobx-react'

const priceService = PriceServiceInstance.priceServiceInstance
export interface IBroadcastProps {}

class Unicast1 extends React.Component<IBroadcastProps> {
  state = {
    number: 0,
  }
  changeValue(e: any) {
    this.setState({
      number: e.target.value,
    })
  }
  addPrice() {
    priceService.addPrice(this.state.number)
  }
  public render() {
    return (
      <div style={{ paddingRight: '30px' }}>
        <ul>
          {priceService.priceList.map((item) => (
            <li>{item.price}</li>
          ))}
        </ul>
        <div style={{ display: 'flex' }}>
          <Input
            maxLength={25}
            value={this.state.number}
            onChange={(e) => {
              this.changeValue(e)
            }}
          ></Input>
          <Button type="primary" onClick={() => this.addPrice()}>
            添加
          </Button>
        </div>
      </div>
    )
  }
}
export default observer(Unicast1)
