import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

import animationData from '../../assets/animation.json';

const Wrapper = styled.div`
    width: 360px;
    height: 83vh;
    background-color: #FFF;
    display: flex;
    align-itens: center;
`

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice',
        }
    }

    return (
        <Wrapper>
            <Lottie options={defaultOptions}/>
        </Wrapper>
    );
};