import image from "./assets/Images/image.png";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto text-center text-sm md:text-base">
          <span>Unlock 48 Hours of Unlimited Access to Our UG Courses - </span>
          <button className="underline hover:no-underline font-semibold">
            Activate Now
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-8 px-8 md:px-6 lg:px-8">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={image}
              alt="DigiNerve Logo"
              className="h-20 md:h-20 object-contain px-40"
            />
          </div>

          <div>
            <button className="bg-blue-900 text-white px-4 md:px-2 py-2 rounded-full font-medium">
              Signup/Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
