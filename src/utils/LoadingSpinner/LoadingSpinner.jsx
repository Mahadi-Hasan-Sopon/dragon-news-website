// import React from 'react'

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <span className="w-40 loading loading-spinner text-primary"></span>
      <span className="w-40 loading loading-spinner text-secondary"></span>
      <span className="w-40 loading loading-spinner text-accent"></span>
      <span className="w-40 loading loading-spinner text-neutral"></span>
      <span className="w-40 loading loading-spinner text-info"></span>
      <span className="w-40 loading loading-spinner text-success"></span>
      <span className="w-40 loading loading-spinner text-warning"></span>
      <span className="w-40 loading loading-spinner text-error"></span>
    </div>
  );
}

export default LoadingSpinner;
