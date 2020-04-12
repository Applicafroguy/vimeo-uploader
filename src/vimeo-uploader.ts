/**
 * VIMEO UPLOADER
 */
import axios from "axios";
import { IUploadData, IHeader, IMetaData } from "./models";
export default class VimeoUploader {
  constructor() {}

  // Create the video
  createVideo(url: string, data: IUploadData, headers: IHeader) {
    return axios.post(url, data, {
      headers: headers,
    });
  }

  // Upload the video file
  uploadVideo(url: string, data: IMetaData, headers: IHeader) {
    return axios.patch(url, data, {
      headers: headers,
    });
  }

  // Verify the upload
}
