import * as React from "react";
import { AxiosResponse } from "axios";

export interface Props {
  uploadURL: string;
  name: string;
  onFinished?: (err: boolean | Error, res?: AxiosResponse<any>) => void;
  onStart?: () => void;
  onProgress?: (percent: number) => void;
  placeholder?: string;
  withCredentials?: boolean;
  customHeaders?: { [x: string]: string };
  disabled?: boolean;
  fileType?: string;
  size?: number;
  defaultImg?: string;
}

declare class AvatarUploader extends React.Component<Props> {
  constructor(props: Props);
}

export default AvatarUploader;
