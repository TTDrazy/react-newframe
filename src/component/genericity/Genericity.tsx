import * as React from 'react'

interface IVO {
  id: number | undefined
}

interface IDTO {
  id: number | undefined
}

class PersonVO implements IVO {
  id: number | undefined
  name: string | undefined
  gender: string | undefined
  age: number | undefined
}
class PersonDTO implements IDTO {
  id: number | undefined
  name: string | undefined
  gender: string | undefined
  age: number | undefined
}

class ArticleVO implements IVO {
  id: number | undefined
  name: string | undefined
  classifyName: string | undefined
  content: string | undefined
}
class ArticleDTO implements IDTO {
  id: number | undefined
  name: string | undefined
  classifyName: string | undefined
  content: string | undefined
}

class ClassifyVO implements IVO {
  id: number | undefined
  name: string | undefined
  parentId: number | undefined
}
class ClassifyDTO implements IDTO {
  id: number | undefined
  name: string | undefined
  parentId: number | undefined
}

// 定义泛型接口
interface IAPI<T extends IVO, V extends IDTO> {
  getAll(): T[]
  getById(id: number): T | undefined
  add(v: V): Boolean
  update(v: V): Boolean
  deleteById(id: number): Boolean
}

// 抽象类实现接口里的方法
abstract class ABSApi<T extends IVO, V extends IDTO> implements IAPI<T, V> {
  getAll(): T[] {
    let list: T[] = []
    return list
  }
  getById(id: number): T | undefined {
    return undefined
  }
  add(v: V): Boolean {
    // 此处省略逻辑
    return true
  }
  update(v: V): Boolean {
    // 此处省略逻辑
    return true
  }
  deleteById(id: number): Boolean {
    // 此处省略逻辑
    return true
  }
}
// 具体类的实现接口，对于 ABSAPI 的补充性方法
interface IClassify_API extends ABSApi<ClassifyVO, ClassifyDTO> {
  getTreeList(): ClassifyVO[]
}
interface IPerson_API extends ABSApi<PersonVO, PersonDTO> {}
interface IArticle_API extends ABSApi<ArticleVO, ArticleDTO> {}
// 具体实现类，继承 ABSAPI 、实现 IClassify_API ，使其具有所有方法

class Person_API extends ABSApi<PersonVO, PersonDTO> implements IPerson_API {}
class Article_API extends ABSApi<ArticleVO, ArticleDTO> implements IArticle_API {}
class Classify_API extends ABSApi<ClassifyVO, ClassifyDTO> implements IClassify_API {
  getTreeList(): ClassifyVO[] {
    let list: ClassifyVO[] = []
    return list
  }
}

export default class Genercity extends React.Component {
  public render() {
    let person_API = new Person_API()
    let article_API = new Article_API()
    let classify_API = new Classify_API()

    console.log(person_API.getAll())
    console.log(person_API.getById(1))
    console.log(person_API.add(new PersonDTO()))
    console.log(person_API.update(new PersonDTO()))
    console.log(person_API.deleteById(1))

    console.log(article_API.getAll())
    console.log(article_API.getById(1))
    console.log(article_API.add(new ArticleDTO()))
    console.log(article_API.update(new ArticleDTO()))
    console.log(article_API.deleteById(1))

    console.log(classify_API.getAll())
    console.log(classify_API.getById(1))
    console.log(classify_API.getTreeList())
    console.log(classify_API.add(new ClassifyDTO()))
    console.log(classify_API.update(new ClassifyDTO()))
    console.log(classify_API.deleteById(1))
    return (
      <div>
        <div>首先我有三个实体类型：人员、文章、分类</div>
        <div>这三个实体类型都含有相对应的增删改查 api 层</div>
        <div>那么对于这个都具有相似功能的 api 层就可以抽为泛型类来使用</div>
        <div>其间所用到的 VO、DTO 也都是用泛型来表示的</div>
      </div>
    )
  }
}
