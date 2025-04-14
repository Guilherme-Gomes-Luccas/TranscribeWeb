import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

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
    accept: { 'audio/*': [] },
  });

  const { t } = useTranslation();

  return (
    <div {...getRootProps()} className="w-1/3 border-blue-700 border-2 border-dashed p-6 rounded-lg text-center">
      <input {...getInputProps()} />
      <p>{t('dropzoneText')}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
        {t('uploadButton')}
      </button>
    </div>
  );
};

export default Dropzone;
