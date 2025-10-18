import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

const ErrorUI = ({ error, onRetry }) => {
  return (
    <div className="fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-center items-center bg-black/30 z-[9999] p-4 w-full h-full">
      <Alert
        variant="destructive"
        className="w-full shadow-2xl animate-fade-in flex flex-col gap-2 max-w-md items-center text-center"
      >
        <div>
          <TriangleAlert className="text-red-600 size-20" />
        </div>
        <AlertTitle className="text-lg font-semibold text-red-700 w-full">
          Something went wrong
        </AlertTitle>
        <AlertDescription className="text-sm text-gray-600 dark:text-gray-300">
          We couldn’t load your content. This might be due to a slow network or
          a temporary issue.
        </AlertDescription>

        {error && (
          <p className="text-xs text-gray-500 italic max-w-sm break-words">
            {error.message}
          </p>
        )}

        <Button
          variant="outline"
          onClick={onRetry}
          className="mt-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
        >
          Try Again
        </Button>

        <p className="text-xs text-gray-500 mt-2">
          Still not working? Refresh the page or check your connection.
        </p>
      </Alert>
    </div>
  );
};

export default ErrorUI;
