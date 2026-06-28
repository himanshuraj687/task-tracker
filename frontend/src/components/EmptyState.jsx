import React from 'react';
import { FaInbox } from 'react-icons/fa';

const EmptyState = () => {
  return (
    <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto shadow-sm my-4">
      <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl text-blue-500 mb-4">
        <FaInbox className="text-4xl" />
      </div>
      <h3 className="text-lg font-bold text-slate-700 mb-1">No tasks available.</h3>
      <p className="text-slate-500 text-sm max-w-xs mx-auto">
        Your dynamic workspace index is completely clear. Use the generation interface to build a tracking instance.
      </p>
    </div>
  );
};

export default EmptyState;