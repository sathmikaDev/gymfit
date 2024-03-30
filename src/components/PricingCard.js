import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ title, packageName, content, middle, end, start }) => {
  return (
    <div
      className={`divide-y py-4 rounded-lg border-[#03F5F4]
       border space-y-6 ${
         middle ? "divide-[#1A1A1A]" : "divide-[#03F5F4]"
       } lg:w-96 ${middle && "lg:mx-auto"} ${end && "lg:me-auto"} ${
        start && "lg:ms-auto"
      } lg:mt-8  ${middle ? "bg-[#03F5F4]" : "bg-[#1A1A1A]"}`}
    >
      {/* package title div */}
      <div className="px-4">
        <h1
          className={`font-body-regular ${
            middle ? "text-[#1A1A1A]" : "text-white"
          } text-2xl`}
        >
          {title}
        </h1>
        <h1
          className={`font-body-medium ${
            middle ? "text-[#1A1A1A]" : "text-[#03F5F4]"
          } text-4xl`}
        >
          {packageName}
          <span className="text-sm">mo</span>{" "}
        </h1>
      </div>

      {/* package details div */}
      <div className="px-4 pt-6">
        {content.map((content, index) => {
          return (
            <div
              className="flex gap-2 items-center text-white mb-1 "
              key={index}
            >
              <FaCheckCircle
                className={`${
                  middle ? "text-[#1A1A1A]" : "text-[#03F5F4]"
                } basis-1/12`}
              />
              <p
                className={`font-primary text-base basis-11/12 ${
                  middle ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
