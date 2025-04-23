import React from "react";
import { Link } from "react-router-dom";
// Define the types for the props
interface LeftSideProps {
  image: string;
  title: string;
  content: React.ReactNode;
  to: string;
}

const LeftSide: React.FC<LeftSideProps> = ({ image, title, content, to }) => {
  return (
    <section className="flex items-center py-10 px-5 bg-white text-black">
    <div className="w-1/2">
      <img
        src={image}
        alt="Stock Image"
        className="w-100 ml-40 h-auto rounded-lg shadow-xl"
      />
    </div>
  
    <div className="w-1/2 pl-10 mr-15">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
  
      <p className="text-lg leading-relaxed">{content}</p>
  
      <div className="mt-4 text-left">
        <Link
          to={to}
          className="inline-block text-blue-600 hover:underline font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  </section>
  
  );
};

export default LeftSide;
