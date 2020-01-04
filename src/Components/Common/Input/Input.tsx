import React from 'react';
import { FormGroup, Label, FormInput, ErrorContainer } from './InputStyledComponents';

export interface InputProps {
    id: string;
    name: string;
    label?: string;
    type: string;
    value: string;
    error?: string;
    onChange?(target: any): void;
    focus?: boolean;
    placeholder?: string;
}

const Input: React.SFC<InputProps> = ({ id, name, label, type, value, error, onChange, focus, placeholder }) => {
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <FormInput id={id} value={value} onChange={onChange}  name={name} type={type} placeholder={placeholder} autoFocus={focus}></FormInput>
            {error && <ErrorContainer>{error}</ErrorContainer>}
        </FormGroup>
    );
}

export default Input;