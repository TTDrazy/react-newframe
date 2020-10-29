import axios from 'axios'
import AxiosConfig from './AxiosConfig'

const Axios = axios.create({
  baseURL: AxiosConfig.BaseURL,
  timeout: AxiosConfig.Timeout,
})

Axios.interceptors.request.use(
  (config) => config,
  (error) => alert(error)
)

Axios.interceptors.response.use(
  (response) => response,
  (error) => alert(error)
)

export default Axios
