import { productData } from "../utils/HomePageData";
import Card from "./Card";

const FamousProduct = () => {
  return (
    <div className="bg-[#0A5D50] w-full">
      <div className="w-[1250px] py-20 items-center mx-auto">
        {/* Heading */}
        <div className="items-center content-center flex flex-col mx-auto">
          <h1 className="font-libre text-[48px] font-semibold text-[#E6E6E6]">
            Our Most Wanted Products
          </h1>
          <p className="font-inter text-[20px] font-light text-[#E6E6E6]">
            Good for environment, good for you
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-row justify-between mt-10">
          {productData.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamousProduct;
