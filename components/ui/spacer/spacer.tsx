const Spacer = ({className} : {className?: any}) => (
  <div className="block">
      <div className={`border border-gray-200 dark:border-gray-800 ${className || ''}`} />
  </div>
);

export default Spacer;
