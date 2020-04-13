import VimeoUploader from "../lib/vimeo-uploader";

let file;
const token = "0fcd510611cca409e758ff73fc60fbcd";
const url = "https://api.vimeo.com/me";

const init = () => {
  const inputElement = document.getElementById("video");

  inputElement.addEventListener(
    "change",
    (event) => {
      file = event.target["files"][0];
    },
    false
  );

  const btn = document.getElementById("upload");
  btn.addEventListener("click", () => {
    uploadVideo();
    console.log("test");
  });
};

const v = new VimeoUploader();

const uploadVideo = async () => {
  console.log("File", file.size);
  const res = await v.createVideo(
    url + "/videos",
    {
      upload: {
        size: file.size,
        approach: "tus",
      },
    },
    {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.vimeo.*+json;version=3.4",
    }
  );

  if (res.status === 200) {
    const sent = await v.uploadVideo(
      `${url}${res.data.uri}`,
      {
        name: file.name,
        description: "Video ",
        privacy: {
          embed: "private",
          view: "nobody",
          download: "true",
        },
        upload: {
          size: file.size,
          approach: "tus",
          upload_link: res.data.upload_link,
        },
      },
      {
        Authorization: `bearer ${token}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
        "Content-Type": "application/offset+octet-stream",
        "Tus-Resumable": "1.0.0",
        "Upload-Offset": 0,
      }
    );
  }
};

init();
