import React, { useState } from "react";
import { storage } from "../../firebase/firebase";

export const useUploadImage = (file) => {
  const [progress, setProgess] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleUpLoadImage = () => {
    const uploadTask = storage.child("images/" + file.name).put(file, {
      contentType: "image/jpeg",
    });
    uploadTask.on("state_changed",
      (snapshot) => {
        setProgess((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },(error) => {
        setError(error);
      },() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };
  return {
    progress,
    imageUrl,
    error,
    handleUpLoadImage,
  };
};
