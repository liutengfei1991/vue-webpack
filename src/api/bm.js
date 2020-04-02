import axios from "./axios";

export const main = (params) => {
    return axios.request({
        url: "api-bs/home/getMain",
        method: "post",
        data: params
    })
}