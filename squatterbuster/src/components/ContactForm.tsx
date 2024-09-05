import React from 'react';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success('Contact request submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold">Contact Community</h2>
      {/* Form fields */}
      <button type="submit" className="bg-green-500 text-white p-2 mt-4">Submit</button>
    </form>
  );
};

export default ContactForm;
