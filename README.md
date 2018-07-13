# React Avatar Uploader

A React Component to upload an Avatar

![2018-07-12](https://thumbs.gfycat.com/IdealisticWastefulChamois-size_restricted.gif)

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

    const App = () => (
     <AvatarUploader
      size={150}
      uploadURL="http://localhost:3000"
      fileType={"image/png"}/>
     );
    
    render(
        <App/>, document.getElementById("root"));

----
## Props
* uploadURL: string; required
* onStart: function()
* onProgress: function(percentage)
* onFinished: function(error, response)
* placeholder: string; default: arrow
* customHeaders: object;
* withCredentials: boolean; default: false
* disabled: boolean; default: false
* fileType: string; default: "image/jpeg"
* size: number; default: 150
* defaultImg: string
* name: string; required