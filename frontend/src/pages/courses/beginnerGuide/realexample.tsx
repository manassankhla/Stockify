import React from "react";

interface RealExampleProps {
  et: string;
  ec: string;
}

const RealExample: React.FC<RealExampleProps> = ({ et, ec }) => {
  return (
    
      <div className="text-center max-w-3xl mx-auto bg-blue-50 rounded-md  shadow-md p-4">
        <h3 className="text-3xl font-semibold mb-4">{et}</h3>
        <p className="text-lg leading-relaxed">{ec}</p>
      </div>
  );
};

export default RealExample;
