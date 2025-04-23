import React from "react";

// Define the types for the props
interface LeftSideProps {
  image: string;
  title: string;
  content: string;
}

const LeftSide: React.FC<LeftSideProps> = ({ image, title, content }) => {
  return (
    <section className="flex items-center justify-between py-10 px-5 bg-white text-black">
      <div className="w-1/2">
        <img
          src={image} // Image passed as a prop
          alt="Stock Image"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
      <div className="w-1/2 pl-10 ml-30">
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{content}</p>
      </div>
    </section>
  );
};

export default LeftSide;
