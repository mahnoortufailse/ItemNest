import SingleCategory from "./SingleCategory";
import {categories} from "../utils/HomePageData";

const Categories = () => {
  return (
    <div className="bg-[#CAD0CF]">
      <div className="categories bg-white w-[1250px] h-[298px] flex flex-row items-center mx-auto p-5">
        {/* Heading */}
        <h1 className="font-libre font-bold text-[36px] text-[#073741] w-[200px] h-[150px] px-10 flex-shrink-0">
          Category for <br /> you
        </h1>

        {/* Scrollable Categories */}
        <div className="flex overflow-x-auto gap-5 px-5 scrollbar-hide w-full ml-10" style={{ scrollBehavior: "smooth" }}>
          {categories.map((category, index) => (
            <SingleCategory
              key={index}
              categoryName={category.categoryName}
              categoryImage={category.categoryImage}
              categoryLink={category.categoryLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
