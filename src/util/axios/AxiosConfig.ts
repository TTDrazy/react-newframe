// 配置 axios 一些公用的设置
import Config from '../../config/Config'

const AxiosConfig = {
  BaseURL: Config.baseUrl,
  Timeout: 5000,
}

export default AxiosConfig
