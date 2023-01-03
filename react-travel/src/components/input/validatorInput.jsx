import React from 'react';
import Field from './../field/Field';
import Label from './../label/Label';
import Input from './Input';

const ValidatorInput = ({
    label = "",
    value = "",
    onChange = () => {}
}) => {
    const onChangeText = (e) => {
        onChange(e.target.value);
    }

    return (
        <Field>
        <Label htmlFor="name">{label}</Label>
        <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={value}
            onChange={onChangeText}
        />
        
    </Field>
    );
};

export default ValidatorInput;