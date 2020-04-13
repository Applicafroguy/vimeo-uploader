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
type ApproachType = "tus";
type ContentType = "application/json" | "application/offset+octet-stream";
type ViewType = "disable" | "nobody" | "password" | "unlisted" | "users";
type EmbedType = "private" | "public" | "whitelist";
type DownloadType = "true" | "false";
