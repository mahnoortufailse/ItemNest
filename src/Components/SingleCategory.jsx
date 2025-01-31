/* eslint-disable react/prop-types */

const SingleCategory = ({ categoryName, categoryImage, categoryLink }) => {
  return (
    <a
      href={categoryLink}
      className="relative flex justify-center items-center h-[200px] w-[200px] bg-[#658C4A] rounded-lg shrink-0"
    >
      <img
        className="object-center object-cover h-[200px] w-[200px] rounded-lg"
        src={categoryImage}
        alt={categoryName}
      />
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 focus:ring-offset-2 focus:ring-gray-400 z-10 text-base text-white font-inter py-1 bg-[#333333] rounded-2xl p-3 text-[14px]  h-[36px]">
        {categoryName}
      </button>
    </a>
  );
};

export default SingleCategory;
