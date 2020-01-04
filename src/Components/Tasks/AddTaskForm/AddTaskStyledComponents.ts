import styled from 'styled-components';

export const FormContainer = styled.div.attrs({
    className: "container-fluid col-12"
})`
    height: 300px;
`;

export const TaskForm = styled.form.attrs({
    className: "col-12 container-fluid"
})``;

export const InputGroup = styled.div.attrs({
    className: "input-group col-11 offset-1"
})``;

export const Select = styled.select.attrs({
    name: "category",
    id: "inputGroupSelect01",
    className:"custom-select"
})``;

export const Option = styled.option``;

export const InputError = styled.div.attrs({
    className: "alert alert-danger error-container"
})``;

export const Button = styled.button.attrs({
    type: "submit",
    className: "col-3 offset-5"
})`
    font-size: 20px;
    min-height: 40px;
    width: 150px;
    padding: 5px 20px;
    border: none;
    background-color: #cab7f7;
    color: #fff;
    border-radius: 20px;
    margin-top: 50px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 1px #c2abf7;
    -moz-box-shadow: 0px 5px 20px 1px #c2abf7;
    box-shadow: 0px 5px 20px 1px #c2abf7;
    cursor: pointer;
    &:hover {
        background-color: #a1b7f5;
        -webkit-box-shadow: 0px 5px 25px 5px #a1b7f5;
        -moz-box-shadow: 0px 5px 25px 5px #a1b7f5;
        box-shadow: 0px 5px 25px 5px #a1b7f5;
    }
    &:focus {
        outline: none;

    }
`
