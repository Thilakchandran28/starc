import { useRef, useState } from "react";
import aboutvideo from '../Assets/about-video/Backend web development - a complete overview.mp4';
export default function TeamShipSection() {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const defaultVideoURL = {aboutvideo}; // Default video URL

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800 3xl:w-full
     border border-red-500">
      <div className="max-w-6xl mx-auto md:flex-row items-center justify-between gap-10 border border-red-500">
        {/* Text Block */}
        <div className="flex justify-center gap-10   pl-10  ">
          <h2 className="text-3xl md:text-4xl font-mont font-medium leading-tight">
            The best software <br></br>teams ship quickly and often.
          </h2>
          <div className="px-20  ">
             <p className="text-gray-600 font-mont max-w-xl pr-10 pb-2">
            With its intuitive interface and powerful features, Stellar empowers
            businesses to leverage technology for growth.
          </p>
          <div className=" gap-4 items-center pt-5">
            <button
              onClick={handlePlay}
              className="bg-[#8A63FF] text-white font-mont py-2 px-5 rounded-full hover:bg-[#7A53EF] transition"
            >
              Watch Video
            </button>
          </div>
         
          </div>
        </div>
<br />
<br />
        {/* Video Block */}
       <div className="w-full  flex justify-center items-center">
         <div className="flex flex-col space-y-4 relative rounded-2xl overflow-hidden shadow-lg w-full max-w-3xl ">
          {!showVideo && (
            <div className="relative ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0uO6brHoskULOyasOMXWHXxK_f83yTTCfQ&s"
                alt="Team Thumbnail"
                className="w-full h-67 object-cover rounded-xl"
              />
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-medium text-sm rounded-xl"
              >
                ▶ Play Video 
              </button>
            </div>
          )}
          {showVideo && (
            <video
              ref={videoRef}
              src={aboutvideo}
              controls
              className="w-full h-67 object-cover rounded-xl"
            />
          )}
        </div>
       </div>
      </div>

      <p className="text-center text-gray-700 font-mont mt-10 text-lg">
        Experience the Stellar difference and unlock the true potential of your online
      </p>
    </section>
  );
}