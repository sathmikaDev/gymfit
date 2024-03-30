import PricingCard from "./PricingCard";

const Pricing = () => {
  const basicPackage = [
    "Access to gym facilities",
    "Basic fitness assessments",
    "Group fitness classes included",
    "Limited access to amenities",
    "No commitment, month-to-month membership",
  ];

  const premiumPackage = [
    "Unlimited access to gym facilities.",
    "Personalized fitness assessments.",
    "Full access to all amenities.",
    "Discounted rates on personal training sessions.",
    "6-month commitment with flexible payment options.",
  ];

  const vipPackage = [
    "All features in the Premium Plan.",
    "Priority booking for personal training.",
    "Exclusive access to VIP events.",
    "Complimentary towel service.",
    "Quarterly fitness assessments and progress tracking sessions.",
  ];

  return (
    <section className="container lg:mx-auto my-20 px-4 lg:px-10">
      <div className="text-center">
        <p className="text-[#03F5F4] font-primary text-sm font-light">
          Pricing
        </p>
        <h1 className="text-white font-body-medium text-3xl md:text-4xl">
          Choose Your Perfect Plan
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4 ">
        <PricingCard
          title="Basic Package"
          packageName="$25/"
          content={basicPackage}
          middle={false}
          start={true}
        />
        <PricingCard
          title="Premium Package"
          packageName="$49/"
          content={premiumPackage}
          middle={true}
        />
        <PricingCard
          title="VIP Package"
          packageName="$95/"
          content={vipPackage}
          middle={false}
          end={true}
        />
      </div>
    </section>
  );
};

export default Pricing;
