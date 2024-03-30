import PrimaryButton from "./PrimaryButton";

const CTA = () => {
  return (
    <section className="container mx-auto my-20 px-4 lg:px-10">
      <div className="rounded-lg bg-[#1A1A1A] flex items-stretch max-w-6xl mx-auto flex-col md:flex-row">
        <div className="basis-4/5 space-y-6 p-10">
          <h1 className="font-body-medium text-[#03F5F4] text-2xl md:text-3xl">
            Start your journey with GymFit today
          </h1>
          <p className="text-white font-primary">
            At GymFit, we're more than just a gym - we're a family united by our
            passion for fitness and wellness. With state-of-the-art facilities,
            expert trainers, and a supportive community, GymFit is your ultimate
            destination for achieving your fitness goals and living your best
            life😎. <br /> <br /> Ready to embark on your fitness journey? Take
            the first step towards a healthier, happier you and join the GymFit
            community today! Whether you're looking to lose weight, build
            muscle, or simply improve your overall well-being, we have the
            resources and support you need to succeed💪😎🚀.
          </p>
          <PrimaryButton text="Be a Member" />
        </div>
        <div className="basis-1/5 image-div-cta"></div>
      </div>
    </section>
  );
};

export default CTA;
