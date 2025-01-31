/* eslint-disable react/prop-types */
const SingleGallery = ({ category }) => {
    return (
      <>
        <div className="bg-white p-1 w-[300px] h-[400px] flex flex-col items-center justify-center">
          {/* Heading centered */}
          <h2 className="text-center font-libre text-[18px] text-[#000000] my-4 h-[45px] font-bold">
            {category.name}
          </h2>
  
          {/* Grid of Images */}
          <div className="grid grid-cols-2 gap-1">
            {category.images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  className="h-[140px] max-w-full w-[127.85px]"
                  src={image}
                  alt={`image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default SingleGallery;
  