import ErrorUI from "../errors/ErrorUI";

const QueryWrapper = ({
  isLoading,
  isError,
  error,
  refetch,
  children,
  loader, // optional custom loader
  errorFallback, // optional custom error UI
}) => {
  if (isLoading) {
    return (
      loader || (
        <div className="flex justify-center items-center min-h-screen text-gray-500">
          Loading data...
        </div>
      )
    );
  }

  if (isError) {
    return errorFallback || <ErrorUI error={error} onRetry={refetch} />;
  }

  return children;
};

export default QueryWrapper;
