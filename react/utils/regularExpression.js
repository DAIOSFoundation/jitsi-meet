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

// 회의방 이름 정규식
export const regMeetingRoom = (name) => {
    const reg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;
    return reg.test(name);
}

// 모든 공백 제거 정규식
export const regSpaceRemove = (value) => {
    return value.replace(/(\s*)/g, "")
}

// 계정 아이디 정규식 //todo 추후 사용
export const regAccountId = (id) => {
    const reg = /^[a-zA-Z0-9]{10,15}$/
    return reg.test(id)
}

// 계정 비밀번호 정규식용 //todo 추후 사용
export const regAccountPassWord = (password) => {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    return reg.test(password)
}
