import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-full max-w-md">
      {label && (
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm text-gray-700 font-medium">{label}</span>
          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-300 rounded overflow-hidden">
        <motion.div
          className="h-3 bg-blue-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
