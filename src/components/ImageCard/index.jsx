import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton } from "..";

const Card = styled.div`
    display: flex:
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 8px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`

const Title = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #FFF;
    font-size: 12px;
    width: 100%;
    padding: 8px 0 0 8px;
    width: 90%;
    border-radius: 8px 8px 0 0;
    background-color: rgba(0, 0, 0, 0.297);
    text-shadow: 0 1px 2px black;
`

const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
            {imageLoaded ? (
                <Card photo={photo}>
                    {/* <Title>{title.length > 20 ? title.substring(20, 0) + '...' : title}</Title> */}
                </Card>
            ) : <Skeleton width="90px" height="90px" /> }
        </>
    );
}

export default ImageCard;