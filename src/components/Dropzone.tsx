import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DropzoneProps {
  onFileAccepted: (file: File) => void;
}

const Dropzone = ({ onFileAccepted }: DropzoneProps) => {
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useTranslation();

  const maxSize = 50 * 1024 * 1024; // 50 MB

  const {
    getRootProps,
    getInputProps,
    open,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setErrorMsg('');
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0]);
      }
    },
    onDropRejected: (fileRejections) => {
      const tooBig = fileRejections.some(rejection =>
        rejection.errors.some(e => e.code === 'file-too-large')
      );
      if (tooBig) {
        setErrorMsg(t('fileTooLarge')); // Exemplo: "O arquivo excede 50MB"
      } else {
        setErrorMsg(t('uploadError')); // Mensagem genérica
      }
    },
    accept: { 'audio/*': [] },
    noClick: true,
    maxSize,
  });

  return (
    <div className="w-1/3 border-blue-700 border-2 border-dashed p-6 rounded-lg text-center" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>{t('dropzoneText')}</p>
      <p>{t('audioSizeText')}</p>
      <button
        onClick={open}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        {t('uploadButton')}
      </button>
      {errorMsg && (
        <p className="text-red-500 mt-2">{errorMsg}</p>
      )}
    </div>
  );
};

export default Dropzone;
