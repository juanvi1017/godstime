import axios from 'axios';
import * as https from 'https';

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((request) => {
    //https.globalAgent.options.rejectUnauthorized = false;
    request.httpsAgent = new https.Agent({ rejectUnauthorised: false, requestCert: false, agent: false });
    return request;
    },
    (err) =>
    {
        console.log('AXIOS Interceptor: Error returned: ' + err);
    });

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
