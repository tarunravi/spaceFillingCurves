import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function UploadFile() {
  const [file, setFile] = useState(null);
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const history = useHistory();
  const uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);

    axios
      .post("/api/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));

    history.push("/Main");
  };

  return (
    <div>
      <input type="file" name="file" onChange={onChangeFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default UploadFile;
