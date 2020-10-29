import Axios from '../../util/axios/AxiosHelper'

const userRoot = 'user'

export class UserAPI {
  async getAll(): Promise<any> {
    let response = await Axios.get(userRoot)
    return response
  }
  async getById(id: number): Promise<any> {
    let response = await Axios.get(`${userRoot}/${id}`)
    return response
  }
  async addArticle(userData: {}): Promise<any> {
    let response = await Axios.post(userRoot, userData)
    return response
  }
  async editArticle(id: number, userData: {}): Promise<any> {
    let response = await Axios.put(`${userRoot}/${id}`, userData)
    return response
  }
  async removeById(id: number): Promise<any> {
    let response = await Axios.delete(`${userRoot}/${id}`)
    return response
  }
}
