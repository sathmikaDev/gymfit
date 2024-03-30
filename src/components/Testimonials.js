import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M .",
      subTitle: "Lost 30 Pounds and Found Confidence",
      comment:
        "Joining GymFit has been a life-changing experience for me. With the support of their amazing trainers and the motivating atmosphere, I've not only shed 30 pounds but gained a whole new level of confidence. I never thought working out could be this enjoyable!😎🚀",
    },
    {
      name: "John L .",
      subTitle: "Achieved Personal Bests with Expert Guidance",
      comment:
        "As an athlete, I'm always looking to push my limits😎. GymFit's trainers helped me reach personal bests I never thought possible❤. Their knowledge and encouragement have been invaluable on my fitness journey✌.",
    },
    {
      name: "Emily R .",
      subTitle: "Overcame Injury and Regained Strength.",
      comment:
        "After a sports injury, I was unsure if I'd ever regain my strength. But with the guidance of the trainers at GymFit, I not only recovered but became stronger than ever😎💖. Their personalized approach and unwavering support made all the difference.🤜💪",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-0">
      <div className="text-center">
        <p className="text-[#03F5F4] font-primary text-sm font-light">
          Testimonials
        </p>
        <h1 className="text-white font-body-medium text-3xl md:text-4xl">
          What our Members have to say
        </h1>
      </div>

      <div>
        <Marquee
          autoFill={true}
          className="mt-8"
          pauseOnHover={true}
          speed={25}
        >
          {testimonials.map((item, index) => {
            return (
              <div
                className="p-4 bg-[#1A1A1A] rounded-lg mx-4 max-w-96"
                key={index}
              >
                <h1 className="text-2xl font-body-medium text-white">
                  {item.name}
                </h1>
                <p className="font-body-regular text-lg text-[#03F5F4] leading-tight">
                  {item.subTitle}
                </p>
                <p className="mt-4 text-white font-primary text-sm">
                  {item.comment}
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
