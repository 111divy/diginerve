import image from "./assets/Images/image.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto text-center text-sm md:text-base">
          <span>Unlock 48 Hours of Unlimited Access to Our UG Courses - </span>
          <button className="underline hover:no-underline font-semibold">
            Activate Now
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-gray-100 py-4 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={image}
              alt="DigiNerve Logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium w-full sm:w-auto">
              Signup/Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
