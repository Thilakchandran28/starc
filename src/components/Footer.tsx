import icon from "../Assets/Starcs.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          <div className="w-full md:col-span-4">
            <div className="mb-4"> 
              <img src={icon} alt="Logo" className="h-10"/>
            </div>
            <p className="text-black-600 font-mont font-semibold">
              Corporate Head Office:{" "}
              <span className="font-normal">
                Ground Floor,C-53,Guindy Industrial Estate,Guindy,Chennai-32,
                Tamil Nadu
              </span>
            </p>
            <br />
            <ul className="text-black-600 font-mont font-semibold mt-2 space-y-1">
              <li>
                Phone: <span className="font-normal">+91-9363034150</span>
              </li>
              <li>
                Email:{" "}
                <span className="font-normal">contactus@staciacorp.com</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-mont font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Employer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-lg font-mont font-bold mb-4">Others</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Terms and condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-lg font-mont font-bold mb-4">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  className="font-mont hover:text-gray-900 transition-colors"
                  href="#"
                >
                  Company milestone
                </a>
              </li>
              <li>
                <a
                  className="font-mont hover:text-gray-900 transition-colors"
                  href="#"
                >
                  Web mail
                </a>
              </li>
              <li>
                <a
                  className="font-mont hover:text-gray-900 transition-colors"
                  href="#"
                >
                  Board of Directors
                </a>
              </li>
              <li>
                <a
                  className="font-mont hover:text-gray-900 transition-colors"
                  href="#"
                >
                  Senior Management
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600">
          <p>© 2024 All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/staciacorp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-gray-900 transition-colors" />
            </a>
            <a
              href="https://x.com/StaciaCorp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="w-6 h-6 text-gray-900 transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/staciacorp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook className="w-6 h-6 text-gray-900 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/stacia_corp_/?igsh=MTA5MGdnZms5ZjhwMA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="w-6 h-6 text-gray-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
