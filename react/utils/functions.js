// 값이 비어있는지 확인 하는 함수
export const isEmpty = (data) => {
    if (
        typeof data === 'undefined' ||
        data === null ||
        data === '' ||
        data === 'NaN'
    ) {
        return true;
    } else {
        return false;
    }
};
