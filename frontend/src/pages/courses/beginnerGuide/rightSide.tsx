import React from "react";

// Define the types for the props
interface RightSideProps {
  image: string;
  title: string;
  content: string;
  
}

const RightSide: React.FC<RightSideProps> = ({ image, title, content }) => {
  return (
    <section className="flex items-center justify-between py-10 px-5 bg-white text-white">
      <div className="w-1/2">
        <img
          src={image} // Image passed as a prop
          alt="Stock Image"
          className="w-100 ml-40 h-auto rounded-lg shadow-xl"
        />
      </div>
      <div className="w-1/2 pl-10 mr-30">
        <h2 className="text-4xl text-black font-semibold mb-4">{title}</h2>
        <p className="text-lg text-black leading-relaxed">{content}</p>
      </div>
    </section>
  );
};

export default RightSide;
