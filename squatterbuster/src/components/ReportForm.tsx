import React from 'react';
import { toast } from 'react-toastify';

const ReportForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success('Report submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold">Report Property</h2>
      {/* Form fields */}
      <button type="submit" className="bg-green-500 text-white p-2 mt-4">Submit</button>
    </form>
  );
};

export default ReportForm;
