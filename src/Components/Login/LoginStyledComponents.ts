import styled from 'styled-components';


export const BaseContainer = styled.div.attrs({
    className: "container col-lg-5 col-xl-4 col-md-8 col-xs-10"
})`
    min-height: 70vh;
    margin-top: 150px;
    border-radius: 20px;
    padding: 80px 20px;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    -moz-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    box-shadow: 0px 15px 25px 2px rgba(15, 15, 15, 0.2);
`

export const FormContainer = styled.div.attrs({
    className: "row container-fluid form-container col-12   "
})`
    margin-left: 100px;
`;

export const Header = styled.div.attrs({
    className: "row  header col-3 offset-5 "
})`
    font-size: 30px;
    color: rgb(159, 169, 224);
`
export const LoginAvatarContainer = styled.div.attrs({
    className: "row col-6 offset-3"
})``;

export const LoginAvatar = styled.img.attrs({
    className: " col-12",
    alt: "login sympol"
})`
    src: url(${props => props.src});
`;

export const FormWrapper = styled.div.attrs({
    className: "row form col-12 "
})`
    margin-left: 20px;
`

export const LoginForm = styled.form.attrs({
    className: "col-12"
})``;

export const Button = styled.button.attrs({
    type:"submit",
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



