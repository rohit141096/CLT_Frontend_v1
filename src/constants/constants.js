import icons from "./icons"

const fileUnits = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

const maxFileSelection = 10

const fileTypeLimits = {
  image: 5,
  audio: 10,
  video: 50,
  document: 25,
}

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const allowedFileTypes = [
  {
    type: "image",
    icon: icons.imageFile,
    mimetype: "image/gif",
    extension: [".gif"],
    max_upload_size: fileTypeLimits.image,
  },
  {
    type: "image",
    icon: icons.imageFile,
    mimetype: "image/jpeg",
    extension: [".jpg", ".jpeg"],
    max_upload_size: fileTypeLimits.image,
  },
  {
    type: "image",
    icon: icons.imageFile,
    mimetype: "image/png",
    extension: [".png"],
    max_upload_size: fileTypeLimits.image,
  },
  {
    type: "image",
    icon: icons.imageFile,
    mimetype: "image/webp",
    extension: [".webp"],
    max_upload_size: fileTypeLimits.image,
  },
  {
    type: "audio",
    icon: icons.music,
    mimetype: "audio/wave",
    extension: [".wav"],
    max_upload_size: fileTypeLimits.audio,
  },
  {
    type: "audio",
    icon: icons.music,
    mimetype: "audio/wav",
    extension: [".wav"],
    max_upload_size: fileTypeLimits.audio,
  },
  {
    type: "audio",
    icon: icons.music,
    mimetype: "audio/x-wav",
    extension: [".xwav"],
    max_upload_size: fileTypeLimits.audio,
  },
  {
    type: "audio",
    icon: icons.music,
    mimetype: "audio/mpeg",
    extension: [".mp3"],
    max_upload_size: fileTypeLimits.audio,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/mp4",
    extension: [".mp4"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/x-m4v",
    extension: [".m4v"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/quicktime",
    extension: [".mov"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/webm",
    extension: [".webm"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/x-msvideo",
    extension: [".avi"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "video",
    icon: icons.videoFile,
    mimetype: "video/mpeg",
    extension: [".mpeg"],
    max_upload_size: fileTypeLimits.video,
  },
  {
    type: "document",
    icon: icons.filePDF,
    mimetype: "application/pdf",
    extension: [".pdf"],
    max_upload_size: fileTypeLimits.document,
  },
  // {
  //     type: "document",
  //     icon: icons.fileCSV,
  //     mimetype: "text/csv",
  //     extension: [".csv"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.fileWord,
  //     mimetype: "application/msword",
  //     extension: [".doc"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.fileWord,
  //     mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //     extension: [".docx"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.filePowePoint,
  //     mimetype: "vnd.ms-powerpoint",
  //     extension: [".ppt", ".pps"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.filePowePoint,
  //     mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  //     extension: [".pptx"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.filePowePoint,
  //     mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  //     extension: [".ppsx"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.fileExcel,
  //     mimetype: "application/vnd.ms-excel",
  //     extension: [".xls"],
  //     max_upload_size: fileTypeLimits.document
  // },
  // {
  //     type: "document",
  //     icon: icons.fileExcel,
  //     mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     extension: [".xlsx"],
  //     max_upload_size: fileTypeLimits.document
  // },
]

export default {
  alphabets,
  fileUnits,
  maxFileSelection,
  fileTypeLimits,
  allowedFileTypes,
}
