import React from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onFileAccepted: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileAccepted }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0]);
      }
    },
    accept: { 'audio/*': [] }, // aceita apenas áudios
  });

  return (
    <div {...getRootProps()} className="w-1/2 border-blue-700 border-2 border-dashed p-6 rounded-lg text-center">
      <input {...getInputProps()} />
      <p>Arraste e solte o arquivo aqui</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">Enviar arquivo</button>
    </div>
  );
};

export default Dropzone;
