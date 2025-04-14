import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-full max-w-md">
      {label && (
        <p className="text-blue-500 mb-2">
          {label} {Math.round(progress)}%
        </p>
      )}
      <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
        <motion.div
          className="h-2 bg-blue-500 rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
