// 제목 정규식
export const regTitle = (title) => {
    const reg = /^.{2,10}$/;
    return reg.test(title)
}

// 이메일 정규식
export const regEmail = (email) => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/m;
    return reg.test(email.trim());
}
