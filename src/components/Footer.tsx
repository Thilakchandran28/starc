import icon from "../Assets/Starcs.png"


const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
           <div>
            <img src={icon} alt=""/><br></br>
           </div>
            <p className="text-black-600 font-mont font-semibold">Corporate Head Office: <span className="font-normal">3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States </span></p><br></br>
            <p className="text-black-600 font-mont font-semibold">Phone: <span className="font-normal">843-496-7759</span></p>
            <p className="text-black-600 font-mont font-semibold">Fax: <span className="font-normal">02-222264303</span></p>
            <p className="text-black-600 font-mont font-semibold">Email: <span className="font-normal">info@mastershub.com</span></p>
          </div>
          <div>
            <h3 className="text-lg font-mont font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Jobs</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Employer</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-mont font-bold mb-4">Others</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">How it works</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Terms and condition</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-mont font-bold mb-4">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Company milestone</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Web mail</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Board of Directors</a></li>
              <li><a href="#" className="font-mont hover:text-gray-900 transition-colors">Senior Management</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600">
          <p>&copy; 2024 All rights reserved</p>

        </div>
      </div>
    </footer>
  );
};
export default Footer;