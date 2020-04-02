import axios from 'axios';
import baseURL from './env'
class Request {
    constructor() {
        // TODO: 根据不同环境设置不同接口地址
        this.baseURL = baseURL.apiURL
        this.timeOut = 3000
    }

    merge(options) {
        return {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
    }

    setInterceptor(instance) {
        instance.interceptors.request.use(config => {
            config.headers.Authorization = 'xxx'
            config.headers.ak = "ZDD";
            return config
        })
        instance.interceptors.response.use(res => {
            if(res.data.code != 1001){
                // let msg = failMsg[res.data.code];
                // if(msg== '') return false;
                // Toast(res.data.msg || msg || '数据异常');
            }
              return res.data;
        }, err => {
            if(err.message.includes('timeout')){
                // Toast('请求超时')
            }
        })
    }
    // 最终调用的方法
    request(options) {
        // 1. 创建axios
        const instance = axios.create()
        // 2. 请求拦截
        this.setInterceptor(instance)
        // 3. 整合请求所需要的参数
        let config = this.merge(options)
        // 4. 请求并返回一个 promise 对象
        return instance(config)
    }
}
export default new Request()