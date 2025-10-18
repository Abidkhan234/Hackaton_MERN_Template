import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const FallBackUI = ({ error, resetErrorBoundary }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-[9999] p-6">
      <div className="flex flex-col items-center gap-4 max-w-md w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6">
        {/* Icon */}
        <div className="p-5 rounded-full bg-red-100 dark:bg-red-900/30 shadow-md">
          <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-red-700 dark:text-red-400">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
          We encountered an unexpected error. Please try again.
        </p>

        {/* Error Details */}
        {error && (
          <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-md p-2 max-w-full overflow-auto mt-2">
            {error.message}
          </pre>
        )}

        {/* Retry Button */}
        <Button
          variant="default"
          className="mt-3 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
          onClick={resetErrorBoundary}
        >
          Reload App
        </Button>
      </div>
    </div>
  );
};

export default FallBackUI;
