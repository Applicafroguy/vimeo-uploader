import { IUploadData, IHeader, IMetaData } from "./models";
export default class VimeoUploader {
    constructor();
    createVideo(url: string, data: IUploadData, headers: IHeader): Promise<import("axios").AxiosResponse<any>>;
    uploadVideo(url: string, data: IMetaData, headers: IHeader): Promise<import("axios").AxiosResponse<any>>;
}
//# sourceMappingURL=vimeo-uploader.d.ts.map