import { whyBuyFromUsData } from "../utils/HomePageData";
const WhyBuyFromUs = () => {
  return (
    <div className="bg-[#FFFFFF] pb-10">
        {/* top heading */}
      <div className="w-[1250px] mx-auto py-10 relative flex flex-col items-center">
        {/* Image positioned behind "W" */}
        <img
          src="./images/whyBugUsFrom.png"
          alt="pic4"
          className="w-[160px] h-[80px] relative top-14 right-64 "
        />
        {/* Heading */}
        <h1 className="font-libre text-[48px] font-semibold text-[#0A5D50] relative z-10">
          Why Bought From Us?
        </h1>
      </div>
      {/* cards display */}
      <div className=" w-[1200px] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {whyBuyFromUsData.map((item, index) => (
          <div key={index} className="bg-white p-1 flex flex-col w-[285px] h-[192px]">
            <img src={item.image} alt={item.title} className="w-[60px] h-[60px] mb-4" />
            <h2 className="text-[20px] font-semibold font-inter text-[#333333]">{item.title}</h2>
            <p className="text-[20px] text-[#666666] mt-2 font-inter">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBuyFromUs;
