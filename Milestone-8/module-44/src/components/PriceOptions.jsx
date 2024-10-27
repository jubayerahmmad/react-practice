import { GrRadialSelected } from "react-icons/gr";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: ["Access to gym equipment", "Locker facilities", "Free Wi-Fi"],
      price: 20,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "Free Wi-Fi",
        "Personal trainer sessions",
        "Access to group classes",
      ],
      price: 50,
    },
    {
      id: 3,
      name: "Elite Membership",
      features: [
        "24/7 gym access",
        "Locker facilities",
        "Free Wi-Fi",
        "Personal trainer sessions",
        "Access to group classes",
        "Free supplements",
        "Sauna access",
      ],
      price: 80,
    },
    {
      id: 4,
      name: "Yoga Classes",
      features: [
        "Beginner to advanced sessions",
        "Certified yoga instructors",
        "Unlimited access to all yoga classes",
      ],
      price: 15,
    },
  ];

  return (
    <>
      <h1 className="text-5xl text-center">Our Pricings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-6">
        {priceOptions.map((options, index) => (
          <div
            className="text-center flex flex-col  space-y-4 p-6 border-2 border-teal-500 rounded-xl"
            key={index}
          >
            <div>
              <span className="text-6xl font-extrabold">{options.price}</span>
              <span className="text-lg">/month</span>
            </div>
            <h1 className="text-4xl font-bold">{options.name}</h1>
            <h3 className="text-2xl font-bold text-left">Key Features</h3>
            <ul className="text-left space-y-2 flex-grow">
              {options.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {" "}
                  <GrRadialSelected />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn w-full">Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PriceOptions;
