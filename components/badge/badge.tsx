export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center rounded-md p-1 bg-gray-50 dark:bg-gray-800">
      <span className="text-xs font-mono text-gray-500 dark:text-white">
        {children}
      </span>
    </div>
  );
};
