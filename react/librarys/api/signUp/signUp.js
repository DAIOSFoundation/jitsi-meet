import axios from "axios";
import {urls} from '../../reqConf';

export const postSignUp = async (params) => {

    const resp = await axios({
        method: 'post',
        url: urls.signUp,
        data: params,
    })

    return resp.data;
}
