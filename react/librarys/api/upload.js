import axios from "axios";
import {objToFormData, urls} from '../reqConf';

export const postFileUpload = async (params) => {
    const resp = await axios({
        method: 'post',
        url: urls.upload,
        data: objToFormData(params.userFile),
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return resp.data;
};
