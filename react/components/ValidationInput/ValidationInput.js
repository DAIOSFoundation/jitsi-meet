import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {isEmpty} from '../../utils/functions';

// id : 텍스트 ID
// label : 텍스트 Label
// value : 텍스트 값
// valid : 텍스트 값 검증
// descriptionText : 텍스트 하단 부가 설명
// errorText : 텍스트 하단 에러 텍스트
// placeholder : 텍스트 placeholder
// fullWidth : 텍스트 전체 넓이 여부
// multiline : textArea 기능 사용 여부
// rowsMax : textArea 기능을 사용했을때 최대 몇줄을 허용하고 그 이후에는 스크롤 표시 여부
// type : 텍스트 값 타입
// inputProps : input element에 적용되는 속성입니다.

const ValidationInput = ({
                             valid,
                             onChangeText,
                             onKeyPress,
                             id,
                             fullWidth,
                             label,
                             placeholder,
                             value,
                             errorText,
                             descriptionText,
                             multiline,
                             rowsMax,
                             type,
                             inputProps,
                             style
                         }) => {

    const [isValid, setIsValid] = useState(false);

    const onChangeTextFn = (e) => {
        if (!isEmpty(valid)) {
            if (!valid(e.target.value)) {
                setIsValid(true)
                return onChangeText(e, true)
            } else {
                setIsValid(false)
                return onChangeText(e, false);
            }
        } else {
            return onChangeText(e)
        }
    }

    const onKeyPressFn = (e) => {
        if (!isEmpty(onKeyPress)) onKeyPress(e.key);
    }

    return (
        <>
            <TextField
                id={id}
                fullWidth={fullWidth}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChangeTextFn}
                helperText={isValid ? errorText : descriptionText}
                error={isValid}
                onKeyPress={onKeyPressFn}
                multiline={multiline}
                rowsMax={rowsMax}
                type={type}
                InputProps={inputProps}
                style={{
                    ...style
                }}
            />
        </>
    );
};

export default React.memo(ValidationInput);
