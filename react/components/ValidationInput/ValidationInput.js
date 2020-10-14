import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {isEmpty} from '../../utils/functions';

// id : 텍스트 ID
// label : 텍스트 Label
// rowsMax : 텍스트 줄
// value : 텍스트 값
// valid : 텍스트 값 검증
// errorText : 하단 에러 텍스트

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
        <div>
            <TextField
                id={props.id}
                label={props.label}
                rowsMax={props.rowsMax}
                value={props.value}
                onChange={onChangeText}
                variant="outlined"
                helperText={valid ? props.errorText : null}
                error={valid}
            />
        </div>
    );
};

export default ValidationInput;
