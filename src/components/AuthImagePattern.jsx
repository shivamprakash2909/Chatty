const AuthImagePattern = ({ title, subtitle }) => {
  // Debugging logs
  const arrayContent = [...Array(9)];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {arrayContent.map((_, i) => {
            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl  ${
                  i % 2 === 0
                    ? "bg-gray-700 animate-pulse" // Blue color for even indices
                    : "bg-gray-900" // Red color for odd indices
                }`}
              />
            );
          })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
