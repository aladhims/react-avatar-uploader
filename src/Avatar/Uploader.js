import React from "react";
import styled from "styled-components";

const Uploader = styled.input`
    display: block;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
`

const UploaderComponent = ({fileType, disabled, onChange}) => (
    <Uploader onChange={onChange} disabled={disabled} type="file" accept={fileType || "image/*"}/>
);

export default UploaderComponent;