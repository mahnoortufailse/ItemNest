/* eslint-disable react/prop-types */
const DisplayProduct = ({ data }) => {
    return (
      <div className="bg-[#CAD0CF] py-6">
        <div className="categories bg-white w-[1250px] h-auto flex flex-col mx-auto p-5">
          {/* Heading at the Top Left */}
          <h2 className="text-left text-[20px] font-bold text-[#000000] mb-4 font-libre">
            {data.heading}
          </h2>
  
          {/* Image Row */}
          <div className="flex  flex-row justify-between ">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="h-[200px] w-[200px]  rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default DisplayProduct;
  