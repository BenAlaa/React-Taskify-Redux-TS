import styled from 'styled-components';

export const TasksContainer = styled.div.attrs({
    className: "container"
})`
    margin-top: 80px;
    padding:20px !important;
    min-height: 90vh;
    border-radius: 50px;
    -webkit-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    -moz-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    box-shadow: 0px 5px 20px 1px #b7b5bb4d;
`;

export const Nav = styled.nav``;

export const NavTabs = styled.div.attrs({
    className:"nav nav-tabs nav-fill",
    id:"nav-tab", 
    role:"tablist"
})`
    padding-bottom: 20px;
`;

export const Tab = styled.a.attrs({
    className: "nav-item nav-link"
})`
    font-size: 18px;
    background-color: #cab7f7;
    color: white;
    margin:10px;
    border-radius: 30px !important;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 10px 1px #c2abf765;
    -moz-box-shadow: 0px 5px 10px 1px #c2abf791;
    box-shadow: 0px 5px 10px 1px #c2abf791;
    &:hover {
        border: none;
        color: white;
        background-color: #a1b7f5;
        /* transform: scale(1.05); */
        -webkit-box-shadow: 0px 5px 15px 5px #a1b7f588;
        -moz-box-shadow: 0px 5px 15px 5px #a1b7f588;
        box-shadow: 0px 5px 15px 5px #a1b7f588;
    }
    @media (max-width: 200px) {
        font-size: 10px;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
    @media (max-width: 767px) {
        font-size: 12px;
    }
    @media (max-width: 992px) {
        font-size: 14px;
    }
    @media (max-width: 1199px) {
        font-size: 16px;
    }
`;

export const ActiveTab = styled.a.attrs({
    className: "nav-item nav-link category-tab active"
})`
    font-size: 18px;
    background-color: #cab7f7;
    color: white;
    margin:10px;
    border-radius: 30px !important;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 10px 1px #c2abf765;
    -moz-box-shadow: 0px 5px 10px 1px #c2abf791;
    box-shadow: 0px 5px 10px 1px #c2abf791;
    &:hover {
        border: none;
        color: white;
        background-color: #a1b7f5;
        /* transform: scale(1.05); */
        -webkit-box-shadow: 0px 5px 15px 5px #a1b7f588;
        -moz-box-shadow: 0px 5px 15px 5px #a1b7f588;
        box-shadow: 0px 5px 15px 5px #a1b7f588;
    }
    @media (max-width: 200px) {
        font-size: 10px;
    }
    @media (max-width: 400px) {
        font-size: 10px;
    }
    @media (max-width: 767px) {
        font-size: 12px;
    }
    @media (max-width: 992px) {
        font-size: 14px;
    }
    @media (max-width: 1199px) {
        font-size: 16px;
    }
`;

export const TabContent = styled.div.attrs({
    id: "nav-tabContent",
    className: "tab-content"
})``;

export const TabPanel = styled.div.attrs({
    className: "tab-pane fade show"
})`
    padding: 15px 10px 
`;

export const ActiveTabPanel = styled.div.attrs({
    className: "tab-pane fade show active"
})`
    padding: 15px 10px 
`;

export const AddTaskBtn = styled.button.attrs({
    type: "submit",
    className: "fixed-bottom"
})`
    height: 80px;
    width: 80px;
    border-radius: 40px;
    border: none;
    background-color: #cab7f7;
    margin: auto;
    margin-bottom: 100px;
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
        border: none;
        outline: none;
    }
    &:active {
        background-color: #5833ad;
        -webkit-box-shadow: 0px 5px 20px 1px #5833ad;
        -moz-box-shadow: 0px 5px 20px 1px #5833ad;
        box-shadow: 0px 5px 20px 1px #5833ad;
    }
`;

export const AddSympol = styled.span`
    color: white;
    font-size: 40px;
    margin-bottom: 100px;
`;

export const Modal = styled.div.attrs({
    className:"modal fade"
})``;

export const ModalDialog = styled.div.attrs({
    className: "modal-dialog ",
    role: "document"
})``;

export const ModalContent = styled.div.attrs({
    className: "modal-content "
})`
    margin-top: 20vh;
    border-radius: 20px;
`;

export const ModalHeader = styled.div.attrs({
    className: "modal-header"
})``;

export const ModalTitle = styled.h5`
    color: #cab7f7;
`;

export const CloseModalBtn = styled.button.attrs({
    type: "button", 
    className: "close"
})``;

export const CloseSympol = styled.span``;

export const ModalBody = styled.div.attrs({
    className: "modal-body"
})``;





