import React from 'react';
import {render} from 'react-dom';
import AvatarUploader from '../../src';

const App = () => (<AvatarUploader
    name="avatar"
    size={150}
    uploadURL="http://localhost:3000"
    fileType={"image/jpg"}
    onFinished={(err, res) => console.log(err)}/>);

    
render(
    <App/>, document.getElementById("root"));