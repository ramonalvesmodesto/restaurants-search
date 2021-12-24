import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #FFF;
    border-left: 5px solid transparent;
    :hover {
        background-color: ${(props) => props.theme.colors.background};
        border-left: 5px solid ${(props) => props.theme.colors.primary};
    }
`

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`

export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.3em;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 5px;
`

export const Address = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1em;
    font-weight: 600;
    line-height: 18px;
    margin-top: 5px;
`

export const RestaurantPhoto = styled.img`
    display: ${(props) => props.imageLoaded ? 'block' : 'none'};
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
 `