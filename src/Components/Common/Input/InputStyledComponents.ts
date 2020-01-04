import styled from 'styled-components';

export const FormGroup = styled.div.attrs({
    className:"form-group col-11 offset-1"
})``;

export const Label = styled.label``;

export const FormInput = styled.input.attrs({
    className: "form-control col-12",
})``;

export const ErrorContainer = styled.div.attrs({
    className:"alert alert-danger"
})`
    width: 100%;
    font-size: 10px;
`;
