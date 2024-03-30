import AboutUsImage from "../images/whyUs.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";
import "../css/global.css";

const AboutUs = () => {
  return (
    <section className="my-20 md:gap-8 grid md:grid-cols-2 container mx-auto items-center px-4 lg:px-10">
      <div>
        {/* image goes here */}
        <img src={AboutUsImage} alt="" className="rounded-lg overflow-hidden" />
      </div>
      <div className="space-y-4 flex flex-col justify-between">
        <div>
          <p className="text-[#03F5F4] font-primary text-sm my-2 font-light">
            Why Choose Us
          </p>
          <h1 className="text-white font-body-medium text-3xl md:text-4xl">
            Welcome to GymFit: <br />
            Where Fitness Meets Passion
          </h1>
          <p className="text-sm font-primary text-[#dadada] font-light my-4">
            We're more than just a gym - we're a community driven by a shared
            passion for health, wellness, and personal growth. Founded with a
            vision to inspire and empower individuals to lead healthier, happier
            lives, GymFit has become a cornerstone in the fitness landscape.
          </p>
          <ul className="text-sm font-primary text-white font-light my-10 space-y-2">
            <li className="flex gap-4 items-center">
              <span>
                <IoMdCheckmarkCircleOutline className="text-[#03F5F4] text-xl" />
              </span>
              <span>Operate with honesty, integrity, and transparency</span>
            </li>
            <li className="flex gap-4 items-center">
              <span>
                <IoMdCheckmarkCircleOutline className="text-[#03F5F4] text-xl" />
              </span>
              <span>
                Believe that fitness is for everyone, and dedicated to creating
                an inclusive environment where all feel welcome and supported.
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <span>
                <IoMdCheckmarkCircleOutline className="text-[#03F5F4] text-xl" />
              </span>
              <span>
                Empower our members to take control of their health and fitness
                journeys, providing the guidance.
              </span>
            </li>
          </ul>
        </div>

        <div className="bottom-0">
          <PrimaryButton text={"Learn More"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
