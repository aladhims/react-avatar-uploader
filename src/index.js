import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Avatar from './Avatar';

export default class AvatarUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage: null,
            loading: false
        }

        this.uploadImage = this
            .uploadImage
            .bind(this);
        this.onImageChange = this
            .onImageChange
            .bind(this);
    }
    async uploadImage(avatar) {
        const {uploadURL, onStart, onProgress, onFinished, formDataName, customHeaders} = this.props;
        if (uploadURL) {
            try {
                if (onStart && typeof onStart === 'function') {
                    onStart();
                }
                this.setState({loading: true});
                const avatarForm = new FormData();

                avatarForm.append(formDataName, avatar, avatar.name);

                const res = await axios.post(uploadURL, avatarForm, {
                    withCredentials: true,
                    headers: customHeaders ? customHeaders : null,
                    onUploadProgress: progressEvent => {
                        let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                        if (onProgress && typeof onProgress === 'function') {
                            onProgress(percentCompleted);
                        }
                    }
                })

                if (res.status && res.status === 200) {
                    this.setState({currentImage: res, loading: false})

                    if (onFinished && typeof onFinished === 'function') {
                        onFinished(false, res);
                    }
                }

            } catch (err) {
                this.setState({loading: false})
                if (onFinished && typeof onFinished === 'function') {
                    onFinished(err);
                }
            }
        }
    }
    onImageChange(e) {
        const imageToUpload = e.target.files[0];
        const reader = new FileReader();
        reader.onload = avatar => this.setState({currentImage: avatar.target.result});
        reader.readAsDataURL(imageToUpload);

        this.uploadImage(imageToUpload);
    }
    render() {
        const {disabled, size, defaultImg, fileType} = this.props;
        const {currentImage} = this.state;
        return (
            <Avatar size={size}>
                {(currentImage || defaultImg)
                    ? <Avatar.Preview src={currentImage || defaultImg}/>
                    : null}
                <Avatar.Uploader
                    fileType={fileType}
                    onChange={this.onImageChange}
                    disabled={disabled}/>
            </Avatar>
        )
    }
}

AvatarUploader.propTypes = {
    uploadURL: PropTypes.string.isRequired,
    onFinished: PropTypes.func,
    onStart: PropTypes.func,
    onProgress: PropTypes.func,
    customHeaders: PropTypes.object,
    disabled: PropTypes.bool,
    fileType: PropTypes.string,
    size: PropTypes.number,
    defaultImg: PropTypes.string,
    formDataName: PropTypes.string
}

AvatarUploader.defaultProps = {
    disabled: false,
    fileType: "image/jpeg",
    size: 150
};