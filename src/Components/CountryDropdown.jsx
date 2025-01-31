import { useState } from "react";

const countries = [
  { code: "PK", name: "PAK", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "US", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "GB", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "CA", name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "AU", name: "AU", flag: "https://flagcdn.com/w40/au.png" },
  { code: "IN", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "FR", name: "France", flag: "https://flagcdn.com/w40/fr.png" },
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default Pakistan

  return (
    <div className="relative group">
      {/* Selected Country */}
      <div className="flex items-center justify-between space-x-2 bg-[#CAD0CF] px-3 py-1.5 rounded h-10">
        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-[43px] h-[28px]" />
        <span className="text-sm font-medium font-inter">{selectedCountry.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3 w-3 text-gray-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      <div className="absolute left-0 top-full z-50 hidden w-full flex-col bg-gray-100 py-1 px-3 text-gray-800 shadow-lg group-hover:flex">
        {countries.map((country) => (
          <button
            key={country.code}
            onClick={() => setSelectedCountry(country)}
            className="flex items-center space-x-2 my-1 py-1 w-full text-left hover:bg-gray-200 rounded"
          >
            <img src={country.flag} alt={country.name} className="w-6 h-6 font-inter" />
            <span className="text-sm font-medium">{country.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryDropdown;
