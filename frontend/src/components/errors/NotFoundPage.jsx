import { AlertTriangle, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6 text-center">
      <div className="flex flex-col items-center gap-8 max-w-lg animate-fade-in">
        {/* Icon */}
        <div className="p-6 rounded-full bg-red-100 dark:bg-red-900/30 shadow-md">
          <AlertTriangle className="w-16 h-16 text-red-600 dark:text-red-400" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100">
          404 - Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Check the URL or go back to the homepage.
        </p>

        {/* Button */}
        <Button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          <Home className="w-6 h-6" />
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
