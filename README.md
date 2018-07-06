# React Avatar Uploader

*A React Component to upload an Avatar *


----
## Instalation

with Yarn

    yarn add react-avatar-uploader

or with NPM

    npm install --save react-avatar-uploader

----
## Example

    import React from 'react';
    import {render} from 'react-dom';
    import AvatarUploader from '../../src';

    const App = () => (<AvatarUploader
    size={150}
    uploadURL="http://localhost:3000"
    fileType={"image/png"}/>);

    
    render(
        <App/>, document.getElementById("root"));

----
## Props
* uploadURL
* onFinished
* disabled
* fileType
* size
* defaultImg
* formDataName