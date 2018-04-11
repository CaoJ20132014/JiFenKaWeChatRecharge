import Axios from 'axios';
import Qs from 'qs';
import Route from '@/router/index';

// Axios全局配置
Axios.defaults.timeout = 10000;
if (process.env.NODE_ENV == 'development') {
    Axios.defaults.baseURL = '/api';
} else {
	Axios.defaults.baseURL = 'https://a.91jfk.com';
}
// http request 拦截器
Axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// http response 拦截器
Axios.interceptors.response.use(
    response => {
        if (response) {
            // console.log(response);
            // if (response.data.code == 430) {
            //     // 430登录过期、账号未登录、其他地方登陆
            //     MessageBox.confirm(response.data.message, '消息提示', {
            //         confirmButtonText: '确定',
            //         showCancelButton: false,
            //         type: 'warning'
            //     }).then(() => {
            //         Route.replace({
            //             path: '/',
            //             query: {
            //                 redirect: Route.currentRoute.fullPath
            //             }
            //         });
            //     }).catch(() => {
            //         Route.replace({
            //             path: '/',
            //             query: {
            //                 redirect: Route.currentRoute.fullPath
            //             }
            //         });
            //     });
            //     return;
            // }
        };
        return response;
    },
    error => {
        if (error.response) {
            // if (error.response.status == 404) {
            //     Route.replace({
            //         path: '/error404',
            //         query: {
            //             redirect: Route.currentRoute.fullPath
            //         }
            //     });
            // } else if (error.response.status == 500) {
            //     Route.replace({
            //         path: '/error500',
            //         query: {
            //             redirect: Route.currentRoute.fullPath
            //         }
            //     });
            // }
        }
        return Promise.reject(error.response.data);
    }
)
export function fetch(url,params,method){
    if (method == 'GET' || method == 'get') {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                params: params
            }).then(response => {
                if (typeof response != 'undefined') {
                    resolve(response.data);
                }
            }).catch(error => {
                reject(error);
            })
        });
    } else if (method == 'POST' || method == 'post'){
        return new Promise((resolve, reject) => {
            Axios.post(url, Qs.stringify(params)).then(response => {
                if (typeof response != 'undefined') {
                    resolve(response.data);
                }
            }, error => {
                reject(error);
            });
        });
    }
}