import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {isEmpty} from '../../utils/functions';

// id : 텍스트 ID
// label : 텍스트 Label
// value : 텍스트 값
// valid : 텍스트 값 검증
// errorText : 하단 에러 텍스트
// placeholder : 텍스트 placeholder
// fullWidth : 텍스트 전체 넓이 여부

const ValidationInput = (props) => {

    const [valid, setValid] = useState(false);

    const onChangeText = (value) => {
        if (!isEmpty(props.valid)) {
            if (!props.valid(value.target.value)) {
                setValid(true)
                return props.onChangeText(value, true)
            } else {
                setValid(false)
                return props.onChangeText(value, false);
            }
        } else {
            return props.onChangeText(value)
        }
    }

    return (
        <>
            <TextField
                id={props.id}
                fullWidth={props.fullWidth}
                label={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onChangeText}
                helperText={valid ? props.errorText : null}
                error={valid}
            />
        </>
    );
};

export default ValidationInput;
