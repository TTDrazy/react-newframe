import * as React from 'react'
import Broadcast1 from '../../component/broadcast/Broadcast1'
import Broadcast2 from '../../component/broadcast/Broadcast2'
import Unicast1 from '../../component/broadcast/Unicast1'
import Unicast2 from '../../component/broadcast/Unicast2'

export interface IBroadcastProps {}

class Broadcast extends React.Component<IBroadcastProps> {
  public render() {
    return (
      <div>
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
      </div>
    )
  }
}
export default Broadcast
