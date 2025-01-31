import CountryDropdown from "./CountryDropdown";

const NavBar = () => {
  return (
    <div className="navBar bg-[#CAD0CF] px-10 flex items-center justify-between py-3">
      {/* Logo Section */}
      <div className="logo">
        <img
          src="./images/Logo.png"
          alt="Logo"
          className="w-[100px] h-[100px]"
        />
      </div>
         {/* Search Bar */}
      <div className="mid-sec w-[560px] h-[70px] bg-[#0A5D50] p-3 px-6 rounded-2xl">
        <form action="/search" className="relative w-full">
          <input
            type="text"
            name="q"
            className="w-full border h-12 shadow p-4 rounded-full"
            placeholder="Search for the Product"
          />
          <button type="submit" className="absolute top-3 right-4">
            <svg
              className="text-gray-500 h-5 w-5 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
                s-17-7.626-17-17S14.61,6,23.984,6z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      {/* RIGHT Section */}
      <div className="right-sec flex flex-row justify-between gap-6 content-center items-center">
        <CountryDropdown />
        <div className="flex flex-col items-center text-sm">
          <p className="font-inter">Hello, Sign in</p>
          <p className="font-inter font-bold">Account and Lists</p>
        </div>
        <div className="flex flex-col items-center text-sm text-center">
          <p className="font-inter font-bold">Returns</p>
          <p className="font-inter font-bold">& Orders</p>
        </div>
        <div className="w-[200px] h-[70px] bg-[#0A5D50] p-3 px-6 rounded-2xl flex flex-row justify-between items-center">
           <img src="./images/pic1.png" alt="cart" className="w-[25px] h-[25px]"/>
           <img src="./images/Favorite.png" alt="cart" className="w-[25px] h-[25px]"/>
           <img src="./images/User.png" alt="cart" className="w-[25px] h-[25px]"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
