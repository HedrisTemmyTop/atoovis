import { useState } from 'react';

const useFilesForm = (initialState = {}) => {
  const [fileData, setFileData] = useState(initialState);

  const handleFileUpload = (e) => {
    setFileData({ ...fileData, [e.target.name]: e.target.files })
  }

  return { fileData, handleFileUpload };
}

export default useFilesForm;

