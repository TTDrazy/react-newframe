import * as React from 'react'

interface CPU {
  cpu: String
  processInstruction(): void
}
interface Memory {
  memory: String
  storeData(): void
}

class ABSCPU implements CPU {
  constructor(cpu: String) {
    this.cpu = cpu
  }
  cpu: String
  processInstruction(): void {
    console.log(`我是${this.cpu},我可以处理指令哦~`)
  }
}
class ABSMemory implements Memory {
  constructor(memory: String) {
    this.memory = memory
  }
  memory: String
  storeData(): void {
    console.log(`我是${this.memory},我可以存放数据哦~`)
  }
}

class Computer {
  constructor(cpu: CPU, memory: Memory) {
    this.cpu = cpu
    this.memory = memory
  }
  // 这台电脑应该具有 cpu 与 内存 的固定插槽
  cpu: CPU
  memory: Memory
  run() {
    this.cpu.processInstruction()
    this.memory.storeData()
    console.log(
      `我的 CPU 是 ${this.cpu.cpu} 的，我的内存是 ${this.memory.memory} 的`
    )
  }
}

class InterCPU extends ABSCPU {
  constructor() {
    super('Inter')
  }
}

class AMDCPU extends ABSCPU {
  constructor() {
    super('AMD')
  }
}

class HDCMemory extends ABSMemory {
  constructor() {
    super('HDC')
  }
}

class JSDMemory extends ABSMemory {
  constructor() {
    super('JSD')
  }
}

export default class MindCore extends React.Component {
  public render() {
    // 将创建新的内存条/内存放在组装电脑时再来控制初始化，将原本集成在电脑初始化时的操作外放，这就叫做依赖注入、控制反转
    // 如果将集成在电脑初始化的操作内置，则叫做控制正转
    // 控制的正反转取决于控制的权限在于本体还是外置
    const computer1 = new Computer(new InterCPU(), new HDCMemory())
    computer1.run()
    const computer2 = new Computer(new AMDCPU(), new JSDMemory())
    computer2.run()
    return (
      <>
        <div>组装一个电脑的小案例</div>
        <div>
          如果有一个人需要组装一台电脑，这台电脑应该具有 cpu 与 内存 的固定插槽
        </div>
        <div>CPU 具有处理指令的功能，内存具有存放数据的功能</div>
        <div>
          现在市面上 CPU 有 Inter 与 AMD 两家厂商的，内存有 海盗船 与 金士顿 的
        </div>
      </>
    )
  }
}
