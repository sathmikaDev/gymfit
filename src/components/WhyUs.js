import { whyUsCardContent } from "../constants/WhyUsCardContent";
import Card from "./Card";

const WhyUs = () => {
  return (
    <section className="container mx-auto my-8 text-center">
      <p className="text-[#03F5F4] font-primary text-sm my-2 font-light">
        Why Choose Us
      </p>
      <h1 className="text-white font-body-medium text-4xl">
        Discover Why GymFit Stands Out!
      </h1>

      <div className="grid grid-flow-col grid-rows-2 gap-4 my-10">
        {whyUsCardContent.map((card, index) => {
          return <Card title={card.title} content={card.content} key={index} />;
        })}
      </div>
    </section>
  );
};

export default WhyUs;
