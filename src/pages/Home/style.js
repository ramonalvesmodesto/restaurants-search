import styled from "styled-components";
import Slider from "react-slick";


export const Wrapper = styled.div`
    display: flex;
`;
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    z-index: 9;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFF;
    padding: 16px;
`;

export const Logo = styled.img`
    width: 200px;
    margin-bottom: 18px;
`

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`

export const CarrouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.3em;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0 3px 0 ;

`

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: .11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    line-height: 29px;
    font-size: 1.3em;
    font-weight: bold;
`

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    font-size: 1em;
    font-weight: 600;
`

