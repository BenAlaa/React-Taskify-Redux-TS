import styled from 'styled-components';

export const TaskContainer = styled.div.attrs({
    className: "container-fluid col-12"
})`
    min-height: 80px;
    border-radius: 20px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    -moz-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    box-shadow: 0px 5px 20px 1px #b7b5bb4d;
`
export const Description = styled.div.attrs({
    className: "col-10 col-sm-10 col-xl-10"
})`
    padding-top: 10px;
    color: rgb(80, 79, 79);
    padding-left: 30px !important;
`;

export const CompletedDescription = styled.div.attrs({
    className: "col-10 col-sm-10 col-xl-10"
})`
    padding-top: 10px;
    padding-left: 30px !important;
    text-decoration: line-through;
    color: rgba(153, 152, 152, 0.438);
`;

export const TaskBtnContainer = styled.div.attrs({
    className: "col-1 col-sm-1 col-xl-1 "
})`
    margin-right: 10px;
`;

export const EditTaskBtn = styled.div.attrs({
    className: "row"
})`
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 10px;
    padding-top: 7px;
    padding-left: 7px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    background-color: rgba(155, 217, 228, 0.445);
    color: rgba(77, 130, 139, 0.678);
    -webkit-box-shadow: 0px 0px 5px 3px #a6d7e454;
    -moz-box-shadow: 0px 0px 5px 3px #a6d7e454;
    box-shadow: 0px 0px 5px 3px #a6d7e454;
    &:hover {
        transform: scale(1.1);
        background-color: rgba(83, 144, 155, 0.664);
        color: white;
        -webkit-box-shadow: 0px 0px 10px 5px #a6d7e454;
        -moz-box-shadow: 0px 0px 10px 5px #a6d7e454;
        box-shadow: 0px 0px 10px 5px #a6d7e46b;
    }
    @media (max-width: 400px){
        font-size: 10px;
    }
    @media (max-width: 767px){
        font-size: 12px;
    }
    @media (max-width: 992px){
        font-size: 14px;
    }
    @media (max-width: 1199px){
        font-size: 16px;
    }
`

export const CompleteTaskBtn = styled.div.attrs({
    className: "row"
})`
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 10px;
    padding-top: 7px;
    padding-left: 7px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    background-color: rgba(155, 228, 191, 0.445);
    color: rgba(77, 139, 123, 0.712);
    -webkit-box-shadow: 0px 0px 5px 3px #a6d7e454;
    -moz-box-shadow: 0px 0px 5px 3px #a6d7e454;
    box-shadow: 0px 0px 5px 3px #a6e4d454;
    &:hover {
        transform: scale(1.1);
        background-color: rgba(83, 155, 119, 0.664);
        color: white;
        -webkit-box-shadow: 0px 0px 10px 5px #a6e4cf54;
        -moz-box-shadow: 0px 0px 10px 5px #a6e4cf54;
        box-shadow: 0px 0px 10px 5px #a6e4cf54;
    }
    @media (max-width: 400px){
        font-size: 10px;
    }
    @media (max-width: 767px){
        font-size: 12px;
    }
    @media (max-width: 992px){
        font-size: 14px;
    }
    @media (max-width: 1199px){
        font-size: 16px;
    }
`

