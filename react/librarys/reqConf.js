const host = "https://dvision-api.daib.io";
// "https://dvision-api.daib.io"

export const urls = {
  upload: host + "/upload",
  auth: host + "/auths"
};

export const jsonHeader = () => {
    return {
        "Content-Type": "application/json",
    };
};

export const jsonUserTokenHeader = (token) => {
    return {
        "Content-Type": "application/json",
        user_token: token,
    };
};

export const headers = (token) => {
    return {
        "Content-Type": "application/json",
        "x-access-token": token,
    };
};

export const formDataHeaders = (token) => {
    return {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
    };
};

export const jsonClientTokenHeader = (token) => {
    return {
        "Content-Type": "application/json",
        client_token: token,
    };
};

export const objToFormData = (obj) => {
    const formData = new FormData();

    formData.append('userFile', obj)

    return formData;
};
