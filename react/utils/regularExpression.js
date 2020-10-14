export const regTitle = (title) => {
    const reg = /^.{2,10}$/;
    return reg.test(title)
}
