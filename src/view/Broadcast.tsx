import * as React from 'react'
import Main from '../component/layout/Main'
import Broadcast1 from './broadcast/Broadcast1'
import Broadcast2 from './broadcast/Broadcast2'
import Unicast1 from './broadcast/Unicast1'
import Unicast2 from './broadcast/Unicast2'

export interface IBroadcastProps {}

class Broadcast extends React.Component<IBroadcastProps> {
  public render() {
    return (
      <div>
        <Main>
          <h2>单播</h2>
          <div style={{ display: 'flex', paddingBottom: '30px' }}>
            <Unicast1></Unicast1>
            <Unicast2></Unicast2>
          </div>
          <h2>多播</h2>
          <div style={{ display: 'flex' }}>
            <Broadcast1></Broadcast1>
            <Broadcast2></Broadcast2>
          </div>
        </Main>
      </div>
    )
  }
}
export default Broadcast
