import Carousel from "./Carousel";

export const HeroSection = () => {
  const items = [
    "NEWS!", "Clothing", "Bath", "Bedding", "Home Goods", "Furniture", "Footwear", "Accessories"
  ];

  return (
    <div className="hero-sec bg-[#CAD0CF] flex justify-center items-center flex-col space-y-4 px-3">
      {/* List of items */}
      <div className="flex space-x-1">
        {items.map((item, index) => (
          <div key={index} className="w-28 h-10 bg-[#CAD0CF] text-center flex items-center justify-center">
            {item}
          </div>
        ))}
      </div>

      {/* Carousel */}
      <Carousel />
    </div>
  );
};
