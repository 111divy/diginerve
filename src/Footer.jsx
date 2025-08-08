import Jp from "./assets/Images/Jp.png";
import image from "./assets/Images/image.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaGooglePlay,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img src={Jp} alt="Jaypee Logo" className="h-25" />
          <img src={image} alt="DigiNerve Logo" className="h-25" />
        </div>

        <div className="text-sm">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="flex items-center gap-2">
            📧 <span>Email:</span>
            <a href="mailto:care@diginerve.com" className="underline">
              care@diginerve.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            📞 <span>Phone:</span>
            <a href="tel:+918800418418" className="underline">
              +91 8800-418-418
            </a>
          </p>
        </div>

        {/* Right Section - Social & Apps */}
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex items-center gap-4 mb-3 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTimes />
          </div>
          <p className="font-semibold mb-1">Download The App</p>
          <div className="flex gap-4 text-xl">
            <FaApple />
            <FaGooglePlay />
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 pt-4 pb-6 text-sm text-center md:text-left max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-2">
        <p>© 2024 DigiNerve. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
