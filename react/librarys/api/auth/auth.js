import axios from "axios";
import {urls} from '../../reqConf';

export const postLogin = async (params) => {

    const resp = await axios({
        method: 'post',
        url: urls.login,
        data: params,
    })

    return resp.data;
}
