import * as React from 'react'
import 'reflect-metadata'
import { container, inject } from 'inversify-props'

interface ICPU {
  cpu: String
  processInstruction(): void
}
interface IMemory {
  memory: String
  storeData(): void
}

class ABSCPU implements ICPU {
  constructor(cpu: String) {
    this.cpu = cpu
  }
  cpu: String
  processInstruction(): void {
    console.log(`我是${this.cpu},我可以处理指令哦~`)
  }
}
class ABSMemory implements IMemory {
  constructor(memory: String) {
    this.memory = memory
  }
  memory: String
  storeData(): void {
    console.log(`我是${this.memory},我可以存放数据哦~`)
  }
}

class Computer {
  constructor(cpu: ICPU, memory: IMemory) {
    this.cpu = cpu
    this.memory = memory
  }
  // 这台电脑应该具有 cpu 与 内存 的固定插槽
  cpu: ICPU
  memory: IMemory
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

class IOCComputer {
  // 这台电脑应该具有 cpu 与 内存 的固定插槽
  cpu: ICPU
  memory: IMemory

  // 注入 IOC 容器
  constructor(@inject() cpu: ICPU, @inject() memory: IMemory) {
    this.cpu = cpu
    this.memory = memory
  }

  run() {
    this.cpu.processInstruction()
    this.memory.storeData()
    console.log(
      `我的 CPU 是 ${this.cpu.cpu} 的，我的内存是 ${this.memory.memory} 的`
    )
  }
}

export default class MindCore extends React.Component {
  public render() {
    // 将创建新的内存条/内存放在组装电脑时再来控制初始化，将原本集成在电脑初始化时的操作外放，这就叫做依赖注入(DI)、控制反转
    // 如果将集成在电脑初始化的操作内置，则叫做控制正转
    // 控制的正反转取决于控制的权限在于本体还是外置

    // Ioc 是把对象的控制权较给框架或容器，容器中存储了众多我们需要的对象，然后我们就无需再手动的在代码中创建对象。
    // 需要什么对象就直接告诉容器我们需要什么对象，容器会把对象根据一定的方式注入到我们的代码中。注入的过程被称为 DI。
    const computer1 = new Computer(new InterCPU(), new HDCMemory())
    computer1.run()
    // const computer2 = new Computer(new AMDCPU(), new JSDMemory())
    // computer2.run()
    // IOC 所需的依赖
    container.addSingleton<ICPU>(new AMDCPU())
    container.addSingleton<IMemory>(new JSDMemory())
    const computer2 = new IOCComputer(new AMDCPU(), new JSDMemory())
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
