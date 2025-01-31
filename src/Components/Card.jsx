/* eslint-disable react/prop-types */
const Card = ({ product }) => {
    return (
      <div className=" w-[312px] p-3 ">
        <img
          src={product.image}
          alt={product.description}
          className="w-[312px] h-[312px] object-cover rounded-lg"
        />
        <p className="text-[18px] font-medium mt-3 text-[#FFFFFF] font-inter">{product.description}</p>
        <div className="flex flex-col  mt-2">
          <span className="text-[#FFFFFF] text-[16px] font-medium font-inter">
            {product.salePrice}
          </span>
          <span className="text-[#FFFFFF] line-through font-inter text-[16px] font-medium">{product.actualPrice}</span>
        </div>
      </div>
    );
  };
  
  export default Card;
  