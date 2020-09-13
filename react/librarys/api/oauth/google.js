import axios from "axios";
import {urls} from '../../reqConf';

export const postGoogleLogin = async (params) => {

    const resp = await axios({
        method: 'post',
        url: urls.auths,
        data: params,
    })

    return resp.data;
};
