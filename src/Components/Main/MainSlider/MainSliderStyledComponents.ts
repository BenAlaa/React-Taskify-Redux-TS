import styled from 'styled-components';
import imag1 from '../Assets/img_bg_1.jpg';


export const Slider = styled.div.attrs({
    className: "slider"
})``;
export const Carousal = styled.div.attrs({
    id:"carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel"
})`
    padding: 0px !important;
`

export const CarousalInner = styled.div`
    // margin-left: 15px;
`

export const CarousalIem = styled.div`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    // background-image: url(${imag1});
`
export const ItemOne = styled.div`
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
height: 100vh;
width: 100vw;
justify-content: center;
background-image: url(${imag1});
`


export const SlideItemQuoat = styled.h1`
    padding-top: 50vh;
    text-align: center;
    color: rgb(51, 46, 80);
    max-width: 500px;
`
export const Button = styled.button`
    font-size: 20px;
    height: 40px;
    width: 150px;
    padding: 5px 20px;
    border: none;
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
    };
    &:focus {
        border: none;
        outline: none;
    }

`
