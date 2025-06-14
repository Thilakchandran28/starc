import React, { useState } from 'react';
import CourseIntro from './CourseIntro';
import LessonViewer from './LessonViewer';
import Quiz from './QuizScreen';
import Navbar from './Navbar';
import Uipdf from '../Assets/pdfs/front-end.pdf';
import UserResearchPdf from '../Assets/pdfs/UI_UX_Basics.pdf';
import UxDesignPdf from '../Assets/pdfs/front-end.pdf';
import DoubleDiamondPdf from '../Assets/pdfs/UI_UX_Basics.pdf';
import UiDesignPdf from '../Assets/pdfs/UI_UX_Basics.pdf';
import ResearchMethodsPdf from '../Assets/pdfs/UI_UX_Basics.pdf';
import figma from "../Assets/video/Master Figma UI Design in 15 Minutes _ This Tutorial Is For You!.mp4";
import "../Styles/LearningModule.cssa";
import frontend from "../Assets/video/Frontend web development - a complete overview.mp4"
import backend from "../Assets/video/Backend web development - a complete overview.mp4"

type VideoContent = {
  title: string;
  duration: string;
  videoSrc: string;
};

type Category = {
  title: string;
  videos: VideoContent[];
  book: string;
};

type Lesson = {
  title: string;
  categories: Category[];
};

interface FlatVideo {
  lessonIndex: number;
  catIndex: number;
  video: VideoContent;
  book: string;
}

const lessonData: Lesson[] = [
  {
    title: 'Lesson 1',
    categories: [
      {
        title: 'Introduction to UI/UX',
        videos: [
          { title: 'Introduction to UI/UX - Part 1', duration: '5:00 min', videoSrc: frontend  },
        ],
        book: Uipdf,
      },
      {
        title: 'What is UI?',
        videos: [
          { title: 'What is UI? - Basics', duration: '15:00 min', videoSrc: figma }, // Use the imported figma video
        ],
        book: UiDesignPdf,
      },
      {
        title: 'What is UX?',
        videos: [
          { title: 'What is UX? - Overview', duration: '5:00 min', videoSrc: backend }, // Updated to a different YouTube video
        ],
        book: UxDesignPdf,
      },
    ],
  },
  {
    title: 'Lesson 2',
    categories: [
      {
        title: 'User Research',
        videos: [
          { title: 'User Research - Part 1', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=0MLwuhpwRiE' },
        ],
        book: UserResearchPdf,
      },
      {
        title: 'Methods of User Research',
        videos: [
          { title: 'Methods of User Research', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=4ldPT4nbx5c' },
        ],
        book: ResearchMethodsPdf,
      },
      {
        title: 'Double Diamond Process',
        videos: [
          { title: 'Double Diamond Process', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=fYOPjWWDZHk' },
        ],
        book: DoubleDiamondPdf,
      },
    ],
  },
];

const LearningModule: React.FC = () => {
  const [isLearningVideoOpen, setIsLearningVideoOpen] = useState(true);
  const [expandedLessons, setExpandedLessons] = useState<number[]>([0]);
  const [expandedCategory, setExpandedCategory] = useState<{ lessonIndex: number; catIndex: number } | null>({ lessonIndex: 0, catIndex: 0 });
  const [selectedTab, setSelectedTab] = useState<'video' | 'book'>('video');
  const [completedVideos, setCompletedVideos] = useState<{ [lessonIndex: number]: number[] }>({ 0: [0, 1, 2] });
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(lessonData[0].categories[0].videos[0]);
  const [selectedBook, setSelectedBook] = useState<string | null>(lessonData[0].categories[0].book);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const flatVideos: FlatVideo[] = lessonData.flatMap((lesson, lessonIndex) =>
    lesson.categories.flatMap((category, catIndex) =>
      category.videos.map(video => ({
        lessonIndex,
        catIndex,
        video,
        book: category.book,
      }))
    )
  );

  const toggleLesson = (index: number) => {
    setExpandedLessons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCategory = (lessonIndex: number, catIndex: number) => {
    if (expandedCategory?.lessonIndex === lessonIndex && expandedCategory?.catIndex === catIndex) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory({ lessonIndex, catIndex });
    }
  };

  const isVideoCompleted = (lessonIndex: number, videoIndex: number) =>
    completedVideos[lessonIndex]?.includes(videoIndex);

  const handleVideoClick = (video: VideoContent, book: string, tab: 'video' | 'book', lessonIndex: number, catIndex: number) => {
    setSelectedVideo(video);
    setSelectedBook(book);
    setSelectedTab(tab);
    setIsQuizActive(false);

    const videoIndex = flatVideos.findIndex(
      (flatVideo) =>
        flatVideo.lessonIndex === lessonIndex &&
        flatVideo.catIndex === catIndex &&
        flatVideo.video === video
    );
    setCurrentVideoIndex(videoIndex);

    if (!expandedLessons.includes(lessonIndex)) {
      setExpandedLessons((prev) => [...prev, lessonIndex]);
    }
    setExpandedCategory({ lessonIndex, catIndex });
  };

  const handleQuizClick = () => {
    setIsQuizActive(true);
    setSelectedVideo(null);
    setSelectedBook(null);
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      const newIndex = currentVideoIndex - 1;
      const { lessonIndex, catIndex, video, book } = flatVideos[newIndex];
      handleVideoClick(video, book, 'video', lessonIndex, catIndex);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < flatVideos.length - 1) {
      const newIndex = currentVideoIndex + 1;
      const { lessonIndex, catIndex, video, book } = flatVideos[newIndex];
      handleVideoClick(video, book, 'video', lessonIndex, catIndex);
    }
  };

  const handleBack = () => {
    setSelectedVideo(null);
    setSelectedBook(null);
    setIsQuizActive(false);
    setCurrentVideoIndex(0);
    setExpandedLessons([0]);
    setExpandedCategory({ lessonIndex: 0, catIndex: 0 });
  };

  return (
    <div className="flex min-h-screen bg-white p-4">
      {/* Left Sidebar - Learning Box */}
      <div className="Left Sidebar bg-white rounded-2xl border border-violet-300 shadow-md ml-4 mt-4 mr-0 w-96">
        <div className="flex justify-between items-center p-5">
          <h2 className="learing text-xl font-semibold text-gray-800">Learning</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Learning Videos Section */}
        <div className={`Learning Videos Section border rounded-lg mx-6 mb-4 ${isLearningVideoOpen ? 'border-purple-500' : 'border-gray-200'}`}>
          <button
            onClick={() => setIsLearningVideoOpen((prev) => !prev)}
            className="w-full flex justify-between items-center text-left py-3 px-4 rounded hover:bg-white transition"
          >
            <div>
              <p className="font-medium text-gray-700 text-base">Learning Videos</p>
              <p className="text-sm text-gray-500">{flatVideos.length} Videos</p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${isLearningVideoOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isLearningVideoOpen && (
            <div className="px-4 pb-4">
              {lessonData.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="mb-4">
                  <button
                    onClick={() => toggleLesson(lessonIndex)}
                    className="w-full flex justify-between items-center text-left py-3 px-3 rounded hover:bg-white transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-violet-500 rounded-full p-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-base">{lesson.title}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${expandedLessons.includes(lessonIndex) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="w-full h-px bg-gray-300 rounded-full mt-2"></div>

                  {expandedLessons.includes(lessonIndex) && (
                    <div className="mt-3 border border-violet-200 rounded-md p-3 text-base">
                      <ul className="space-y-3">
                        {lesson.categories.map((category, catIndex) => (
                          <li key={catIndex}>
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleCategory(lessonIndex, catIndex)}
                            >
                              <div className="flex items-center space-x-3">
                                {isVideoCompleted(lessonIndex, catIndex * 100) ? (
                                  <svg
                                    className="w-5 h-5 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.879a1 1 0 001.234.97l6.518-1.709a1 1 0 00.748-.97v-2.121a1 1 0 00-.748-.971z"
                                    />
                                  </svg>
                                )}
                                <span className="text-base">{category.title}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-gray-500 text-sm">{category.videos[0].duration}</span>
                                <svg
                                  className={`w-5 h-5 transform transition-transform ${
                                    expandedCategory?.lessonIndex === lessonIndex && expandedCategory?.catIndex === catIndex
                                      ? 'rotate-180'
                                      : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            <div className="w-full h-px bg-gray-300 rounded-full mt-1 mb-3"></div>
                            {expandedCategory?.lessonIndex === lessonIndex && expandedCategory?.catIndex === catIndex && (
                              <div className="ml-8 mt-3">
                                <div className="flex bg-white rounded-full p-1 mb-4 w-48 border border-gray-200">
                                  {category.videos.map((video, vidIndex) => (
                                    <div key={vidIndex} className="relative flex w-full rounded-full bg-white">
                                      <div
                                        className={`absolute w-1/2 h-full rounded-full bg-violet-600 transition-transform duration-300 ${
                                          selectedTab === 'video' && selectedVideo === video ? 'translate-x-0' : 'translate-x-full'
                                        }`}
                                      ></div>
                                      <button
                                        onClick={() => handleVideoClick(video, category.book, 'video', lessonIndex, catIndex)}
                                        className={`relative z-10 flex-1 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                          selectedTab === 'video' && selectedVideo === video ? 'text-white' : 'text-gray-700'
                                        }`}
                                      >
                                        Video
                                      </button>
                                      <button
                                        onClick={() => handleVideoClick(video, category.book, 'book', lessonIndex, catIndex)}
                                        className={`relative z-10 flex-1 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                          selectedTab === 'book' && selectedVideo === video ? 'text-white' : 'text-gray-700'
                                        }`}
                                      >
                                        Book
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      {selectedTab === 'book' && selectedVideo && (
                        <div className="text-gray-600 mt-3 text-base">
                          {/* <p>:book: Book resources coming soon for {lesson.title}.</p> */}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quiz Section */}
        <div className="Quiz Section border border-gray-200 rounded-lg mx-6 mb-4">
          <button
            onClick={handleQuizClick}
            className="w-full flex justify-between items-center text-left py-3 px-4 rounded hover:bg-white transition opacity-60 cursor-not-allowed"
          >
            <div>
              <p className="font-medium text-gray-700 text-base">Quiz</p>
              <p className="text-sm text-gray-500">1 Assessment</p>
            </div>
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="#4C1D95"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9V7a5 5 0 10-10 0v2H5v11a2 2 0 002 2h10a2 2 0 002-2V9h-2zM9 7a3 3 0 116 0v2H9V7z"
                fill="#4C1D95"
              />
            </svg>
          </button>
        </div>

        {/* Claim Your Course Certificate Section */}
        <div className="Claim Your Course Certificate Section border border-gray-200 rounded-lg mx-6 mb-4 opacity-60 cursor-not-allowed">
          <button className="w-full flex justify-between items-center text-left py-3 px-4 rounded hover:bg-white transition">
            <div>
              <p className="font-medium text-gray-700 text-base">Claim your course certificate</p>
              <p className="text-sm text-gray-500">1 Assessment, New ass</p>
            </div>
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="#4C1D95"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9V7a5 5 0 10-10 0v2H5v11a2 2 0 002 2h10a2 2 0 002-2V9h-2zM9 7a3 3 0 116 0v2H9V7z"
                fill="#4C1D95"
              />
            </svg>
          </button>
        </div>

        {/* Learning Materials Section */}
        <div className="Learning Materials Section border border-gray-200 rounded-lg mx-6 mb-6">
          <button className="w-full flex justify-between items-center text-left py-3 px-4 rounded hover:bg-white transition">
            <div>
              <p className="font-medium text-gray-700 text-base">Learning Materials</p>
              <p className="text-sm text-gray-500">1 Resource</p>
            </div>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="Right Side Content flex-1 p-4 m-4 bg-white rounded-2xl border border-gray-200  shadow-md flex items-center justify-center min-h-[calc(100vh-2rem)]">
        {isQuizActive ? (
          <div className="quiz-com w-full h-full">
            <Quiz />
          </div>
        ) : selectedTab === 'video' && selectedVideo ? (
          <div className="video-com w-full h-full">
            <CourseIntro
              courseTitle="UI/UX Designer Tutorial"
              lessonTitle={
                lessonData[expandedCategory?.lessonIndex || 0].categories[
                  expandedCategory?.catIndex || 0
                ].title
              }
              videoSrc={
                lessonData[expandedCategory?.lessonIndex || 0].categories[
                  expandedCategory?.catIndex || 0
                ].videos[0]?.videoSrc // Pass the first video's videoSrc
              }
              onBack={handleBack}
              onPrevious={currentVideoIndex > 0 ? handlePrevious : undefined}
              onNext={currentVideoIndex < flatVideos.length - 1 ? handleNext : undefined}
            />
          </div>
        ) : selectedTab === 'book' && selectedVideo && selectedBook ? (
          <div className="book-com w-full h-full">
            <LessonViewer config={{ bookSrc: selectedBook }} />
          </div>
        ) : (
          <div className="text-gray-500 text-center">Please select a video or book to view content.</div>
        )}
      </div>
    </div>
  );
};

export default LearningModule;