import SingleGallery from "./SingleGallery";

/* eslint-disable react/prop-types */
const ProductGallery = ({ gallery }) => {
  return (
    <>
      <div className="bg-[#CAD0CF]">
        <div className="w-[1250px] mx-auto grid grid-cols-4 gap-5 pt-3">
          {gallery.map((category, index) => (
            <SingleGallery key={index} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
