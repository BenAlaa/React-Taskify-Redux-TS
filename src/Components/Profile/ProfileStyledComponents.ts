import styled from 'styled-components';

export const ProfileContainer = styled.div`
    margin-top: 80px;
    height: 90vh;
    padding: 50px;
    border-radius: 50px;
    -webkit-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    -moz-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    box-shadow: 0px 5px 15px 2px rgba(15, 15, 15, 0.137);
    overflow: auto;
`
export const ProfileImage = styled.img`
    height: 200px;
    width: 200px;
    padding: 20px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    -moz-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    box-shadow: 0px 5px 15px 2px rgba(15, 15, 15, 0.137);
    src: url(${props => props.src});
    &:hover {
        -webkit-box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
        -moz-box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
        box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
    }
`
export const UserName = styled.div`
    padding-left: 30px;
    font-weight: 600;
    font-size: 25px;
    margin-top: 10px;
    color: rgb(94, 94, 94);
`

export const UserTitle = styled.div`
    padding-left: 20px;
    font-weight: 400;
    font-size: 20px;
    margin-top: 0px;
    color: rgba(147, 117, 196, 0.698);
`

export const ProfileInfoContainer = styled.div`
    margin-top: 10px;
`

export const InfoContainer = styled.div`
    padding: 10px;
    margin-left: 5px !important;
    margin-bottom: 10px !important;
    border-radius: 10px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    -moz-box-shadow: 0px 10px 30px 1px rgba(15, 15, 15, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(15, 15, 15, 0.137);
    &:hover {
        -webkit-box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
        -moz-box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
        box-shadow: 0px 5px 30px 5px rgba(15, 15, 15, 0.192);
    }
`

export const InfoKey = styled.div`
    font-weight: 700;
    color: rgba(0, 0, 0, 0.705);
`
export const InfoValue = styled.div`
    color: rgba(0, 0, 0, 0.52);
`

