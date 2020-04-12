import VimeoUploader from "../lib/vimeo-uploader";

console.log("test");

const v = new VimeoUploader();
const createVideo = async () => {
  await v.createVideo(
    "https://api.vimeo.com/me/videos",
    {
      upload: {
        size: 800,
        approach: "tus",
      },
    },
    {
      Authorization: "bearer ",
      Accept: "application/vnd.vimeo.*+json;version=3.4",
      "Content-Type": "application/json",
    }
  );
};

const uploadVideo = async () => {
  await v.uploadVideo(
    "https://api.vimeo.com/me/videos",
    {
      name: "",
      description: "",
      privacy: {
        embed: "private",
        view: "nobody",
        download: "true",
      },
      upload: {
        size: 800,
        approach: "tus",
      },
    },
    {
      Authorization:
        "bearer 56o0Tz5DzDb141LJKwIzy0mz/hrG0oW+Ozp9G5E5VInhLKm+0rxmoI5LBEBTyd40X+y6fdmK4XLsl8PxQKYGd92ot8CI6r4GKpr0fTmN02lX8LRmqo9gI6O27Rykaz72",
      Accept: "application/vnd.vimeo.*+json;version=3.4",
      "Content-Type": "application/json",
    }
  );
};
