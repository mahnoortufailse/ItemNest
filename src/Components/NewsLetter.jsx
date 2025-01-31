const NewsLetter = () => {
    return (
      <div className="w-full  py-10 flex justify-center">
        <div className="w-[1250px] flex flex-col items-center text-center justify-between gap-20">
          {/* Heading */}
          <h1 className="text-[32px] font-semibold text-[#FFFFFF] mb-6 font-inter ">
            Subscribe to our newsletter
          </h1>
  
          {/* Newsletter Form */}
          <form action="#" className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 ">
              <div className=" w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-[16px] font-medium text-gray-900"
                >
                  Email address
                </label>
               
                <input
                  className="block p-3 pl-5 w-full h-[56px] text-sm text-gray-900 bg-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Email Address"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 w-full h-[56px] sm:w-auto text-[20px] font-medium text-white bg-[#0A5D50]  hover:bg-[#084c42] focus:ring-4 focus:ring-green-300 font-inter"
              >
                Subscribe
              </button>
            </div>
            
          </form>
          <div className="flex flex-row gap-5">
             <img src="./images/google.png" alt="google" className="w-[60px]"/>
             <img src="./images/amazon.png" alt="Amazon" className="w-[60px]"/>
             <img src="./images/philips.png" alt="philips" className="w-[60px]"/>
             <img src="./images/tohida.png" alt="Toshida" className="w-[60px]"/>
             <img src="./images/sumsung.png" alt="Sunsung" className="w-[60px]" />
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsLetter;
  