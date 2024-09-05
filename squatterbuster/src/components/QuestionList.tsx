import React from 'react';

const QuestionList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
      <ul className="list-disc pl-5">
        <li>What is SquatterBuster?</li>
        <li>How can I report an illegal occupation?</li>
        <li>What actions can I take after reporting?</li>
        {/* Add more questions as needed */}
      </ul>
    </div>
  );
};

export default QuestionList;
