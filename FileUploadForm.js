import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!, $filename: String!, $uploaderName: String!) {
    uploadFile(file: $file, filename: $filename, uploaderName: $uploaderName) {
      success
    }
  }
`;

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [uploaderName, setUploaderName] = useState('');
  const [uploadFile, { data }] = useMutation(UPLOAD_FILE);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleFilenameChange = event => {
    setFilename(event.target.value);
  };

  const handleUploaderNameChange = event => {
    setUploaderName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const variables = { file, filename, uploaderName };
    await uploadFile({ variables });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <input
        type="text"
        placeholder="Enter a filename"
        value={filename}
        onChange={handleFilenameChange}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={uploaderName}
        onChange={handleUploaderNameChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploadForm;

