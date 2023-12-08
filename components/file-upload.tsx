"use client";

interface FileUploadProps {
  onChange : (url ?: string) => void;
  value : String;
  endpoint : "messageFile" | "serverImage"
}

const FileUpload = ({onChange , value , endpoint} : FileUploadProps) => {
  return (
    <div>FileUpload</div>
  )
}

export default FileUpload