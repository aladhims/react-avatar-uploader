import React, {Component} from 'react';
import PropTypes from "prop-types";
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
        const {uploadURL, onFinished, formDataName} = this.props;
        if (uploadURL) {
            try {
                this.setState({loading: true});
                const avatarForm = new FormData();

                avatarForm.append(formDataName, avatar, avatar.name);

                let res = await fetch(uploadURL, {
                    method: 'POST',
                    credentials: 'include',
                    body: avatarForm
                });

                if (res.status && res.status === 200) {
                    res = await res.json();
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
                    : <Avatar.Uploader
                        fileType={fileType}
                        onChange={this.onImageChange}
                        disabled={disabled}/>}
            </Avatar>
        )
    }
}

AvatarUploader.propTypes = {
    uploadURL: PropTypes.string.isRequired,
    onFinished: PropTypes.func,
    disabled: PropTypes.bool,
    fileType: PropTypes.string,
    size: PropTypes.number,
    defaultImg: PropTypes.string,
    formDataName: PropTypes.string
}

AvatarUploader.defaultProps = {
    disabled: false,
    fileType: "image/*",
    size: 150,
};