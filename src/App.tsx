import './App.css';
import Header from './components/Header';
import audioToText from './assets/audioToText.png';
import Dropzone from './components/Dropzone';
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);

  const handleFileAccepted = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError('');
    setTranscript('');
    setSummary('');
    setShowTranscript(false);

    try {
      const response = await fetch(`${API_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Erro ao enviar o arquivo');

      const result = await response.json();
      setTranscript(result.transcript ?? 'Sem transcrição');
      setSummary(result.summary ?? 'Sem resumo');
    } catch (error) {
      console.error('Erro no upload:', error);
      setError('Erro ao enviar ou processar o arquivo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen">
      <Header />

      <section className="flex justify-center items-center px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Transcreva áudios de forma <br /> rápida e simples
            </h2>
            <p className="text-lg opacity-80">
              Basta enviar seu arquivo de áudio e receba a transcrição em instantes.
            </p>
          </div>

          <img
            src={audioToText}
            alt="Transcrição de áudio para texto"
            className="sm:w-64 md:w-80 w-0 h-auto"
          />
        </div>
      </section>

      <main className="flex flex-col items-center gap-6 px-4 pb-16 w-">
        <Dropzone onFileAccepted={handleFileAccepted} />

        {loading && <p className="text-blue-500">Processando áudio...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !transcript && !error && (
          <p className="text-gray-500">Nenhum arquivo enviado ainda.</p>
        )}

        {(summary || transcript) && (
          <div className="w-full max-w-screen-lg px-4 space-y-4">
            {summary && (
              <div>
                <h3 className="font-bold text-xl">Resumo:</h3>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded">{summary}</p>
              </div>
            )}

            {transcript && (
              <div>
                <h3 className="font-bold text-xl flex justify-between items-center">
                  <span>Transcrição:</span>
                  <button
                    className="text-blue-500 text-sm underline"
                    onClick={() => setShowTranscript((prev) => !prev)}
                  >
                    {showTranscript ? 'Minimizar' : 'Expandir'}
                  </button>
                </h3>
                {showTranscript && (
                  <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded whitespace-pre-wrap">
                    {transcript}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
