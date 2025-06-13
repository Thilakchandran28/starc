import icon from '../Assets/Icon.png';
import insta from '../Assets/insta.png';
import music from '../Assets/music.png';
import tele from '../Assets/tele.png';
import youtube from '../Assets/youtube.png';
const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
           <div>
            <img src={icon} alt=""/>
           </div>
            <p className="text-gray-600 font-semibold">Corporate Head Office: <span className="font-normal">3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States</span></p>
            <p className="text-gray-600 font-semibold">Phone: <span className="font-normal">843-496-7759</span></p>
            <p className="text-gray-600 font-semibold">Fax: <span className="font-normal">02-222264303</span></p>
            <p className="text-gray-600 font-semibold">Email: <span className="font-normal">info@mastershub.com</span></p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Employer</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Others</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms and condition</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Company milestone</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Web mail</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Board of Directors</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Senior Management</a></li>
            </ul>
          </div>
        </div>
        
        
          <p>&copy; 2024 All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900"><img src={insta} alt="Instagram" className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><img src={tele} alt="Telegram" className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><img src={music} alt="TikTok" className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><img src={youtube} alt="YouTube" className="h-6 w-6" /></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
