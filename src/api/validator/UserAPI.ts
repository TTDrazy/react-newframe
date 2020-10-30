import Axios from '../../util/axios/AxiosHelper'

const userRoot = 'user'

export class UserAPI {
  async getAll(): Promise<any> {
    let response = await (await Axios.get(userRoot)).data
    return response
  }
  async getById(id: number): Promise<any> {
    let response = await (await Axios.get(`${userRoot}/${id}`)).data
    return response
  }
  async addArticle(userData: {}): Promise<any> {
    let response = await (await Axios.post(userRoot, userData)).data
    return response
  }
  async editArticle(id: number, userData: {}): Promise<any> {
    let response = await (await Axios.put(`${userRoot}/${id}`, userData)).data
    return response
  }
  async removeById(id: number): Promise<any> {
    let response = await (await Axios.delete(`${userRoot}/${id}`)).data
    return response
  }
}
