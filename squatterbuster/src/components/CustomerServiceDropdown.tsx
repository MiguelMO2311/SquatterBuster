import React from 'react';

const CustomerServiceDropdown: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Customer Service</h2>
      <label htmlFor="customer-service" className="block mb-2">Select a company:</label>
      <select id="customer-service" className="p-2 border">
        <option value="">Select a company</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default CustomerServiceDropdown;

