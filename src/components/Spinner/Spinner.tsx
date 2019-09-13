import * as React from 'react';

const Spinner = ({ color }: { color?: string | undefined }) => {
  const spinnerClasses = `spinner-border ${color && `text-${color}`}`;

  return (
    <div className={spinnerClasses} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
