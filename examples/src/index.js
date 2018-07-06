import React from 'react';
import {render} from 'react-dom';
import AvatarUploader from '../../src';

const App = () => (<AvatarUploader
    size={150}
    uploadURL="http://localhost:3000"
    fileType={"image/png"}/>);

    
render(
    <App/>, document.getElementById("root"));