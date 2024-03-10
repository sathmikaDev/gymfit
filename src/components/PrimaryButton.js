import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="rounded-md text-center px-4 py-2 text-[#121212] bg-[#03F5F4] font-primary font-semibold hover:bg-[#121212] border border-[#03F5F4] hover:text-[#03F5F4] transition-all duration-300">
      {text}
    </button>
  );
};

export default PrimaryButton;
