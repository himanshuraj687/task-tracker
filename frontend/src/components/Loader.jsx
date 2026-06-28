import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-sm font-medium text-slate-500 animate-pulse">Syncing cluster states...</p>
    </div>
  );
};

export default Loader;