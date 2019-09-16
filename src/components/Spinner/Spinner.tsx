import * as React from 'react';

interface IProps {
  color?: string | undefined;
}

const Spinner: React.FC<IProps> = ({ color }) => {
  const spinnerClasses = `spinner-border ${color && `text-${color}`}`;

  return (
    <div className={spinnerClasses} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
