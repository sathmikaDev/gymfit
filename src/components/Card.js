import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-md p-4 text-start hover:scale-[1.02] cursor-pointer duration-500">
      <h1 className="font-body-regular text-xl text-[#03F5F4]">{title}</h1>
      <p className="text-white font-primary font-light">{content}</p>
    </div>
  );
};

export default Card;
