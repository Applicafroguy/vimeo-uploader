"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VIMEO UPLOADER
 */
const axios_1 = require("axios");
class VimeoUploader {
    constructor() { }
    // Create the video
    createVideo(url, data, headers) {
        return axios_1.default.post(url, data, {
            headers: headers,
        });
    }
    // Upload the video file
    uploadVideo(url, data, headers) {
        return axios_1.default.patch(url, data, {
            headers: headers,
        });
    }
}
exports.default = VimeoUploader;
//# sourceMappingURL=vimeo-uploader.js.map