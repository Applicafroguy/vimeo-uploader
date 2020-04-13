export interface IUploadData {
    upload: IUpload;
}
/**
 *
 */
export interface IMetaData {
    name: string;
    description: string;
    upload?: IUpload;
    privacy: IPrivacy;
}
export interface IHeader {
    Authorization?: string;
    "Content-Type"?: ContentType;
    Accept?: string;
    "Tus-Resumable"?: string;
    "Upload-Offset"?: number;
}
/**
 * Internal interfaces
 */
interface IUpload {
    approach?: ApproachType;
    size: number;
    upload_link?: string;
    redirect_url?: string;
    link?: string;
}
interface IPrivacy {
    download: DownloadType;
    embed: EmbedType;
    view: ViewType;
}
/**
 * Types
 */
declare type ApproachType = "tus";
declare type ContentType = "application/json" | "application/offset+octet-stream";
declare type ViewType = "disable" | "nobody" | "password" | "unlisted" | "users";
declare type EmbedType = "private" | "public" | "whitelist";
declare type DownloadType = "true" | "false";
export {};
//# sourceMappingURL=models.d.ts.map