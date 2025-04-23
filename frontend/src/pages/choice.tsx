import React from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../assets/bg.jpeg";
const courses = () => {
    const navigate = useNavigate();
    const cardData = [
        { title: "Learn", route: "/courses" },
        { title: "Invest", route: "/invest/dashboard" },
    ];


    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center p-6"
             style={{
                backgroundImage: `url(${bgimg})`,
              }}>
                <h1 className="text-4xl font-extrabold mb-8 text-gray">Begin Your Journey</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {cardData.map((card) => (
                        <div
                            key={card.title}
                            onClick={() => navigate(card.route)}
                            className="bg-white w-[300px] h-[320px] p-6 rounded-3xl shadow-lg hover:bg-orange-400 hover:shadow-xl hover:text-white cursor-pointer transition duration-300 transform hover:-translate-y-1 flex items-center justify-center"

                        >
                            <h2 className="text-2xl hover:text-white font-semibold text-center text-gray">
                                {card.title}
                            </h2>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default courses;