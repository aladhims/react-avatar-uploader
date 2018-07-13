import styled from "styled-components";
import Uploader from "./Uploader";
import ImagePreview from "./ImagePreview";

const Avatar = styled.div `
    display: flex;
    justify-content: center;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    border: 2px dashed #9b9b9b;
    border-radius: 50%;
    cursor: pointer;
    background-color: #f7f7f7;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: 60% 60%;
    background-image: url(${props => props.placeholder});
`;

Avatar.Uploader = Uploader;
Avatar.Preview = ImagePreview;

export default Avatar;