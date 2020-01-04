import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import { Slider, Carousal, CarousalInner,  CarousalIem, ItemOne, SlideItemQuoat, Button } from './MainSliderStyledComponents';


export interface MainSliderProps {
    props: any
}

const MainSlider: React.SFC<MainSliderProps> = ({ props }) => {
    function handleStart() {
        props.history.push('/tasks');
    }
    return (
        <Slider>
            <Row>
                <Col  lg={12}>
                    <Carousal >
                        <CarousalInner>
                            <CarousalIem>
                                <ItemOne>
                                    <Col lg={6} sm={8} lgOffset={4} smOffset={2}>
                                        <SlideItemQuoat>"The key is in not spending time, but in investing it." -- Stephen R. Covey</SlideItemQuoat>
                                        <Col col={12} sm={3} md={2} lg={2} offset={2} lgOffset={2} smOffset={5} xsOffset={4}   >
                                            <Button onClick={() => handleStart()}>Get Started</Button>
                                        </Col>
                                    </Col>
                                </ItemOne>
                            </CarousalIem>

                        </CarousalInner>

                    </Carousal>
                </Col>

            </Row>
        </Slider>
    );
}

export default MainSlider;