import { useRef, useState } from "react";

export default function TeamShipSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
      setShowVideo(false); // reset view
    }
  };

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-10">
        {/* Text Block */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-mont font-medium leading-tight">
            The best software teams ship quickly and often.
          </h2>
          <p className="text-gray-600 font-mont max-w-md">
            With its intuitive interface and powerful features, Stellar empowers
            businesses to leverage technology for growth.
          </p>
          <div className="flex gap-4 items-center">
            <button
              onClick={handlePlay}
              disabled={!videoURL}
              className="bg-[#8A63FF] text-white font-mont py-2 px-5 rounded-full"
            >
              Watch Video
            </button>
            <label className="cursor-pointer text-[#8A63FF] font-mont underline text-sm">
              Upload Video
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          </div>
        </div>

        {/* Video Block */}
        <div className="flex flex-col space-y-3 relative rounded-xl overflow-hidden shadow-lg w-full max-w-xl">
          {!showVideo && (
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Thumbnail"
                className="w-full object-cover rounded-xl"
              />
              {videoURL && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-medium text-sm rounded-xl"
                >
                  ▶ Play Video (2:34)
                </button>
              )}
            </div>
          )}
          {showVideo && videoURL && (
            <video
              ref={videoRef}
              src={videoURL}
              controls
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
      </div>

      <p className="text-center text-gray-700 font-mont mt-10 text-lg">
        Experience the Stellar difference and unlock the true potential of your online
      </p>
    </section>
  );
}
