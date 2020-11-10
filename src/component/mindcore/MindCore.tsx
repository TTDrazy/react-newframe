import * as React from 'react'
import 'reflect-metadata'
import { container, inject } from 'inversify-props'

interface ICPU {
  // 接口里最好只有方法的定义，不要乱写
  processInstruction(): void
}
interface IMemory {
  storeData(): void
}

abstract class ABSCPU implements ICPU {
  // 抽象类里最后只有方法的定义，在继承类中多态实现具体方法
  constructor(cpu: String) {
    this.cpu = cpu
  }
  cpu: String

  abstract processInstruction(): void
}
abstract class ABSMemory implements IMemory {
  constructor(memory: String) {
    this.memory = memory
  }
  memory: String
  abstract storeData(): void
}

class Computer {
  constructor(cpu: ABSCPU, memory: ABSMemory) {
    this.cpu = cpu
    this.memory = memory
  }
  // 这台电脑应该具有 cpu 与 内存 的固定插槽
  cpu: ABSCPU
  memory: ABSMemory
  run() {
    console.log(
      `我的 CPU 是 ${this.cpu.cpu} 的，我的内存是 ${this.memory.memory} 的`
    )
    this.cpu.processInstruction()
    this.memory.storeData()
  }
}

class InterCPU extends ABSCPU {
  constructor() {
    super('Inter')
  }
  processInstruction(): void {
    console.log('我是 Inter 的处理器，我的性能最棒啦~')
  }
}

class AMDCPU extends ABSCPU {
  constructor() {
    super('AMD')
  }
  processInstruction(): void {
    console.log('我是 AMD 的处理器，我的价格最实惠啦~')
  }
}

class HDCMemory extends ABSMemory {
  constructor() {
    super('HDC')
  }
  storeData(): void {
    console.log('我是 海盗船 的处理器，我的性能最棒啦~')
  }
}

class JSDMemory extends ABSMemory {
  constructor() {
    super('JSD')
  }
  storeData(): void {
    console.log('我是 金士顿 的处理器，我的性价比最高啦~')
  }
}

//注入到容器中
container.addSingleton<ICPU>(ABSCPU)
container.addSingleton<IMemory>(ABSMemory)

export default class MindCore extends React.Component {
  // 在类中去引用
  @inject() cpu: ABSCPU = new AMDCPU()
  @inject() memory: ABSMemory = new JSDMemory()

  public render() {
    // 将创建新的内存条/内存放在组装电脑时再来控制初始化，将原本集成在电脑初始化时的操作外放，这就叫做依赖注入(DI)、控制反转
    // 如果将集成在电脑初始化的操作内置，则叫做控制正转
    // 控制的正反转取决于控制的权限在于本体还是外置

    // Ioc 是把对象的控制权较给框架或容器，容器中存储了众多我们需要的对象，然后我们就无需再手动的在代码中创建对象。
    // 需要什么对象就直接告诉容器我们需要什么对象，容器会把对象根据一定的方式注入到我们的代码中。注入的过程被称为 DI。
    const computer1 = new Computer(new InterCPU(), new HDCMemory())
    computer1.run()
    // 原始方式
    // const computer2 = new Computer(new AMDCPU(), new JSDMemory())
    // computer2.run()
    console.log('======================')
    // IOC 的方式
    const computer = new Computer(this.cpu, this.memory)
    computer.run()
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
        <div>现在可以通过 IOC 容器将其任意的组装起来</div>
        <div>
          Ioc
          是把对象的控制权较给框架或容器，容器中存储了众多我们需要的对象，然后我们就无需再手动的在代码中创建对象
        </div>
        <div>
          需要什么对象就直接告诉容器我们需要什么对象，容器会把对象根据一定的方式注入到我们的代码中。注入的过程被称为依赖注入(DI)
        </div>
      </>
    )
  }
}
