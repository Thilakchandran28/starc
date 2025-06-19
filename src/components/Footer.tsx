import icon from "../Assets/Starcs.png";
import { IoLogoFacebook } from "react-icons/io";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12  flex justify-center ">
      <div className="w-[80%] mx-20 px-4 sm:px-6 lg:px-8 w">
        <div className="flex justify-between ">
          <div className="w-[35%]">
            <div>
              <img src={icon} alt="" />
              <br></br>
            </div>
            <p className="text-black-600 font-mont font-semibold">
              Corporate Head Office:{" "}
              <span className="font-normal">
                Ground Floor, C-53, Guindy Industrial Estate, Guindy, Chennai - 32, Tamil Nadu{" "}
              </span>
            </p>
            <br></br>
            <p className="text-black-600 font-mont font-semibold">
              Phone: <span className="font-normal">+91-9363034150</span>
            </p>
          
            <p className="text-black-600 font-mont font-semibold">
              Email: <span className="font-normal">contactus@staciacorp.com</span>
            </p>
          </div>

         <div className=" flex justify-between w-[55%]">
           <div>
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
          <div>
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
          <div className="">
            <h3 className="text-lg font-mont font-bold mb-4">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Company milestone
                </a>
              </li>  
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Web mail
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Board of Directors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mont hover:text-gray-900 transition-colors"
                >
                  Senior Management
                </a>
              </li>
            </ul>
          </div>
         </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600">
          <p>&copy; 2024 All rights reserved</p>
          <div className="flex gap-3 ">
            <p>
              <a
                href="https://www.linkedin.com/company/staciacorp/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-gray-900 transition-colors" />
              </a>
            </p>
            <p>
              <a href="https://x.com/StaciaCorp" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className="w-6 h-6 text-gray-900 transition-colors" />
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/staciacorp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook className="w-6 h-6 text-gray-900  transition-colors" />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="w-6 h-6 text-gray-900 transition-colors" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;