import React from 'react';

export interface InputProps {
    id:string;
    name:string;
    label?:string;
    type:string;
    value:string;
    error?:string;
    onChange?(target:any):void;
    focus?:boolean;
    placeholder?:string;
}
 
const Input: React.SFC<InputProps> = ({id, name, label, type, value, error, onChange, focus, placeholder}) => {
    return ( 
        <div className="form-group col-11 offset-1">
            <label htmlFor={name} className="">{label}</label>
            <input id={id} value={value} onChange={onChange} className=" form-control col-12"  name={name} type={type} placeholder={placeholder} autoFocus={focus} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;