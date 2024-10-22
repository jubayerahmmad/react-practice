// import banner from "../../assets/banner.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="lg:container mx-auto p-6 banner bg-cover bg-no-repeat md:w-full h-96 lg:h-[698px]">
      <div className="flex flex-col items-center justify-center text-center text-white space-y-6 h-full">
        <h1 className="text-lg lg:text-4xl font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-gray-200 text-xs lg:text-xl">
          Join a community of top chefs, learn from their expertise, and create
          your own culinary masterpieces.
        </p>
        <div className="flex gap-2">
          <button className="btn btn-outline bg-teal-500 text-white border-none rounded-full">
            Explore More
          </button>
          <button className="btn btn-outline text-white rounded-full ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
