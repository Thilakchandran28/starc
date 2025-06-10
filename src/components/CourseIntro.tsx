import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Settings,
} from "lucide-react";
interface CourseIntroProps {
  courseTitle: string;
  lessonTitle: string;
  onBack?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onSettings?: () => void;
  about?: string;
  description?: string;
  videoSrc?: string;
  videoPoster?: string;
}
export default function CourseIntro({
  courseTitle,
  lessonTitle,
  onBack,
  onPrevious,
  onNext,
  onSettings,
  about = "Lorem ipsum dolor sit amet consectetur. Sociis tempus fermentum morbi enim posuere nisi.",
  description = "Lorem ipsum dolor sit amet consectetur. Tincidunt sed enim mi proin fermentum. In ornare blandit nec tortor varius semper. Tincidunt ultrices magna ipsum una scelerisque porta ad sem eu. Scelerisque eros maecenas volutpat amet tortor proin elit mattis. Est amet et elit bibendum amet. Aliquet dolor sit pharetra at aliquam sapien nisl eget. Sit nisl metus vel fermentum sed est. Auctor nisi ullamcorper mi tellus bibendum. Donec quis in dolor vel duis dui turpis nunc id.",
  videoSrc = "video.mp4",
  videoPoster = "https://via.placeholder.com/800x450.png?text=Course+Video+Thumbnail",
}: CourseIntroProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button onClick={onBack} aria-label="Back">
            <ArrowLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
          </button>
          <div>
            <h2 className="text-sm text-gray-500">{courseTitle}</h2>
            <h1 className="text-base font-semibold text-gray-900">{lessonTitle}</h1>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <button
            onClick={onPrevious}
            className="flex items-center space-x-1 cursor-pointer hover:text-blue-600"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <button
            onClick={onNext}
            className="flex items-center space-x-1 cursor-pointer hover:text-blue-600"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSettings}
            className="hover:text-blue-600"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Video Section */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="absolute top-3 right-3 z-10 bg-black/40 rounded-full p-2">
          <Settings className="w-5 h-5 text-white" />
        </div>
        <video controls className="w-full rounded-xl" poster={videoPoster}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* About this course */}
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          About this course
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{about}</p>
      </section>
      {/* Description */}
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </section>
    </div>
  );
}