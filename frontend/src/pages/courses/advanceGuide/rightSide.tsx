import React from "react";
import { Link } from "react-router-dom";

// Define the types for the props
interface RightSideProps {
  image: string;
  title: string;
  content: React.ReactNode;
  to: string;
}

const RightSide: React.FC<RightSideProps> = ({ image, title, content, to }) => {
  return (
    <section className="flex items-center justify-between py-10 px-5 bg-white text-white">
      {/* LEFT SIDE: Text */}
      <div className="w-1/2 pr-10 ml-15">
        <h2 className="text-4xl text-black font-semibold mb-4">{title}</h2>
        <p className="text-lg text-black leading-relaxed">{content}</p>
        <Link
          to={to}
          className="inline-block mt-4 text-blue-600 hover:underline font-medium"
        >
          Learn More →
        </Link>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Stock Image"
          className="w-100 ml-40 h-auto rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
};

export default RightSide;
