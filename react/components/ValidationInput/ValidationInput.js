import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const ValidationInput = () => {

    const [value, setValue] = useState('');
    const [isValue, setIsValue] = useState(false);

    const validateName = name => {
        if (name.length > 1) {
            setIsValue(false)
            setValue(name)
        } else {
            setIsValue(true)
            setValue(name)
        }
    }

    return (
        <div>
            <TextField
                id=""
                label="이름"
                rowsMax={4}
                value={value}
                onChange={e => validateName(e.target.value)}
                variant="outlined"
                helperText={isValue ? "정확한 값을 입력해주세요." : null}
                error={isValue}
            />
        </div>
    );
};

export default ValidationInput;
