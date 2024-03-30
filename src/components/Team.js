import team1 from "../images/sliderImages/team1.png";
import team2 from "../images/sliderImages/team2.png";
import team3 from "../images/sliderImages/team3.png";

const Team = () => {
  return (
    <section className="my-20 md:max-w-7xl mx-auto px-4 lg:px-10">
      <div className="text-center">
        <p className="text-[#03F5F4] font-primary text-sm font-light">
          Meet our Team
        </p>
        <h1 className="text-white font-body-medium text-3xl md:text-4xl">
          Guiding You Toward Your Fitness Goals
        </h1>
      </div>

      {/* card div */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div>
          <img src={team1} alt="team1" className="w-full" />
          <div className="bg-[#03F5F4] rounded-b-xl px-4 py-2">
            <h1 className="font-body-medium text-black lg:text-2xl text-lg leading-none">
              Peter Samson
            </h1>
            <p className="font-body-regular text-gray-900 leading-none">
              Strength Training Specialist
            </p>
          </div>
        </div>

        <div>
          <img src={team2} alt="team1" className="w-full" />
          <div className="bg-[#03F5F4] rounded-b-xl px-4 py-2">
            <h1 className="font-body-medium text-black lg:text-2xl text-lg leading-none">
              Julia Andrew
            </h1>
            <p className="font-body-regular text-gray-900 leading-none">
              Nutrition Expert
            </p>
          </div>
        </div>

        <div>
          <img src={team3} alt="team1" className="w-full" />
          <div className="bg-[#03F5F4] rounded-b-xl px-4 py-2">
            <h1 className="font-body-medium text-black lg:text-2xl text-lg leading-none">
              David Johnson
            </h1>
            <p className="font-body-regular text-gray-900 leading-none">
              Functional Training Wizard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
