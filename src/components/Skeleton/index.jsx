import React from "react";
import styled, { keyframes } from "styled-components";

const KeyFramesLoading = keyframes`
    0% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color:  ${(props) => props.theme.colors.text};
    border-radius: 8px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFramesLoading} 500ms infinite alternate;
`;

export default({ width, height }) => <LoadingSkeleton width={ width } height={ height}/>;