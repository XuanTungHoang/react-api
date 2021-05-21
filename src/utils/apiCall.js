import axios from 'axios';
import * as Config from '../constants/Config'

export default function callApi(endpoint, method = 'GET', headers = null, params = null) {
    return axios({
            method,
            url: `${Config.API_URL}/${endpoint}`,
            params,
        },{
            headers,
        }).catch(err => {
            console.log(err);
        });
}