import './App.css';
import Header from './components/Header';
import audioToText from './assets/audioToText.png';
import Dropzone from './components/Dropzone';

function App() {

  const handleFileAccepted = (file: File) => {
    console.log('Arquivo recebido:', file);
    // Aqui você pode chamar a função de transcrição
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen">
      <Header />

      <section className="flex justify-center items-center px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
          {/* Texto */}
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
            className="w-64 md:w-80 h-auto"
          />
        </div>
      </section> 

      <main className='flex justify-center items-center'>
        <Dropzone onFileAccepted={handleFileAccepted} />
      </main>
    </div>
  );
}

export default App;
