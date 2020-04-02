const envType = process.env.VUE_APP_CURRENTMODE;
let baseURL = {};
console.log(1, process.env);

if(envType === 'test') { //配置路径----测试
    console.log('测试环境地址');
    baseURL.apiURL= "xxx" ;
} else if(envType === 'show'){   //配置路径----演示
    console.log('演示环境地址');
    baseURL.apiURL= "xxx" ;
} else if (envType === 'prod'){ //配置路径----生产
    console.log('正式环境地址');
    baseURL.apiURL=  "xxx";
} else if(process.env.NODE_ENV === 'production'){//默认生产路径
    console.log('默认生产环境');
    baseURL.apiURL=  "xxx";
    console.log('默认开发环境');
    baseURL.apiURL= "xxx";
} else if(process.env.NODE_ENV === 'development'){//配置路径-----开发本地
    console.log('默认开发环境');
    baseURL.apiURL= "xxx";
}
export default baseURL;