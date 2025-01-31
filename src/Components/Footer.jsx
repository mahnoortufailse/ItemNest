import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="relative w-full  py-10">
        <div className="w-full px-1 mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-4 ">
            
            {/* First Column: Logo & Contact Info */}
            <div className="flex flex-col gap-5">
              <img src="./images/LogoFooter.png" alt="Company Logo" className="w-40 mb-3" />
              <p className="text-[14px] text-gray-500 font-inter">Customer Support</p>
              <p className=" text-white text-[16px] font-inter">(629) 555-0129</p>
              <p className=" text-[14px]  text-gray-500 font-inter">4517 Washington Ave,Manchester,kentucky 38495</p>
              <p className="text-white text-[16px] font-inter">info@kinbo.com</p>
              
            </div>
  
            {/* Second Column: Product */}
            <div className="font-inter flex flex-col ">
              <p className="mb-5 text-[23px] font-semibold text-white font-inter">Top Categories</p>
              <ul className="flex flex-col justify-between gap-5">
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Electronics</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Fashions</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Home Appliances</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Sports and Outdoors</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Soap</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Home Decor</a></li>
              </ul>
            </div>
  
            {/* Third Column: Company */}
            <div >
              <p className="mb-5 text-[23px] font-semibold text-white font-inter">Quick Links</p>
              <ul className="flex flex-col justify-between gap-5">
              <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Shop Product</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Shopping Cart</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">WishList</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Track Order</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">Customer Help</a></li>
                <li><a href="#" className="block text-gray-400 py-1 hover:text-slate-500 text-[14px] font-inter">About Us</a></li>
              </ul>
            </div>
  
            {/* Fourth Column: Resource */}
            <div>
              <p className="mb-5 text-[23px] font-semibold text-white font-inter">Download App</p>
              <ul className="flex flex-col justify-between gap-5">
                <li><a href="#" className="block py-1  flex flex-row text-center items-center gap-3">
                <BiLogoPlayStore className="w-[35px] h-[35px] bg-[#073741] text-white rounded-full"/>
                 <p className="text-white py-1 hover:text-slate-500 text-[11px] font-inter">Get it Now <br /> <span className="text-white text-[14px]">Google Play</span></p>
                </a></li>
                <li><a href="#" className="block py-1  flex flex-row text-center items-center gap-3">
                <FaApple className="w-[35px] h-[35px] bg-[#073741] text-white rounded-full"/>
                 <p className="text-white py-1 hover:text-slate-500 text-[11px] font-inter">Get it Now <br /> <span className="text-white text-[14px]">App Store</span></p>
                </a></li>
                
              </ul>
            </div>
  
            {/* Fifth Column: Help Center */}
            <div>
              <p className="mb-5 text-[23px] font-semibold text-white font-inter">Popular Tags</p>
              <ul className="flex flex-row  gap-3">
              <li><a href="#" className="block text-white py-1 hover:text-slate-500 text-[14px] font-inter">Game</a></li>
                <li><a href="#" className="block text-white py-1 hover:text-slate-500 text-[14px] font-inter">iPhone</a></li>
                <li><a href="#" className="block text-white py-1 hover:text-slate-500 text-[14px] font-inter">TV</a></li>
                <li><a href="#" className="block text-white py-1 hover:text-slate-500 text-[14px] font-inter">Laptop</a></li>
                <li><a href="#" className="block text-white py-1 hover:text-slate-500 text-[14px] font-inter">MacBook</a></li>
              </ul>
            </div>
            
          </div>
  
          {/* Footer Bottom Section */}
          <div className="flex flex-col items-center justify-center w-full py-4 mt-12  ">
            <p className="block  text-[14px] text-gray-400 font-inter text-center ">EasyBuy-Crafted with excellence By Akhlaq Altaf, Huzaifa Sajjab, Rimsha Muneer.</p>
            <p className="block mb-4 text-[14px] text-gray-400 font-inter text-center ">
              © 2024. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  