import React, { useState } from 'react';
import CourseIntro from './CourseIntro';
import LessonViewer from './LessonViewer';
import Quiz from './QuizScreen';
import Navbar from './Navbar';

type VideoContent = {
  title: string;
  duration: string;
  videoSrc: string;
};

type Category = {
  title: string;
  videos: VideoContent[];
};

type Lesson = {
  title: string;
  categories: Category[];
};

const lessonData: Lesson[] = [
  {
    title: 'Lesson 1',
    categories: [
      {
        title: 'Introduction to UI/UX',
        videos: [
          { title: 'Introduction to UI/UX', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=_f8dMFzYRCE' },
        ],
      },
      {
        title: 'What is UI?',
        videos: [
          { title: 'What is UI?', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=izbydia9jz4' },
        ],
      },
      {
        title: 'What is UX?',
        videos: [
          { title: 'What is UX?', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=h1BGDHumhj4' },
        ],
      },
    ],
  },
  {
    title: 'Lesson 2',
    categories: [
      {
        title: 'User Research',
        videos: [
          { title: 'User Research', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=lZORMUufA_Y' },
        ],
      },
      {
        title: 'Methods of User Research',
        videos: [
          { title: 'Methods of User Research', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=ijiQ2vsIJqg' },
        ],
      },
      {
        title: 'Double Diamond Process',
        videos: [
          { title: 'Double Diamond Process', duration: '5:00 min', videoSrc: 'https://www.youtube.com/watch?v=p7GmO8ewjmw' },
        ],
      },
    ],
  },
];

const LearningModule: React.FC = () => {
  const [isLearningVideoOpen, setIsLearningVideoOpen] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState<number[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<{ [lessonIndex: number]: number[] }>({});
  const [selectedTab, setSelectedTab] = useState<'video' | 'book'>('video');
  const [completedVideos, setCompletedVideos] = useState<{
    [lessonIndex: number]: number[];
  }>({ 0: [0, 1, 2] });
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);

  const toggleLesson = (index: number) => {
    setExpandedLessons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCategory = (lessonIndex: number, catIndex: number) => {
    setExpandedCategories((prev) => {
      const lessonCategories = prev[lessonIndex] || [];
      if (lessonCategories.includes(catIndex)) {
        return {
          ...prev,
          [lessonIndex]: lessonCategories.filter((i) => i !== catIndex),
        };
      } else {
        return {
          ...prev,
          [lessonIndex]: [...lessonCategories, catIndex],
        };
      }
    });
  };

  const isVideoCompleted = (lessonIndex: number, videoIndex: number) =>
    completedVideos[lessonIndex]?.includes(videoIndex);

  const handleVideoClick = (video: VideoContent, tab: 'video' | 'book') => {
    setSelectedVideo(video);
    setSelectedTab(tab);
    setIsQuizActive(false);
  };

  const handleQuizClick = () => {
    setIsQuizActive(true);
    setSelectedVideo(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-1">
      {/* Left Sidebar - Learning Box */}
      <div className="bg-white rounded-2xl border border-violet-300 shadow-md m-4 w-80">
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800 p-4">Learning</h2>
            <button className="text-gray-500 hover:text-gray-700 p-3">
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
          <div>
            <div className="w-[100%] h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Learning Videos Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-10">
          <button
            onClick={() => setIsLearningVideoOpen((prev) => !prev)}
            className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-700">Learning Videos</p>
              <p className="text-sm text-gray-500">10 Videos</p>
            </div>
            <svg
              className={`w-4 h-4 text-gray-500 transform transition-transform ${
                isLearningVideoOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isLearningVideoOpen && (
            <div className="mt-2">
              {lessonData.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="mb-2">
                  <button
                    onClick={() => toggleLesson(lessonIndex)}
                    className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-violet-50 transition"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">{lesson.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        expandedLessons.includes(lessonIndex) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedLessons.includes(lessonIndex) && (
                    <div className="mt-2 border border-violet-200 rounded-md p-2 text-sm">
                      <ul className="space-y-2">
                        {lesson.categories.map((category, catIndex) => (
                          <li key={catIndex}>
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleCategory(lessonIndex, catIndex)}
                            >
                              <div className="flex items-center space-x-2">
                                {isVideoCompleted(lessonIndex, catIndex * 100) ? (
                                  <svg
                                    className="w-4 h-4 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-4 h-4 text-gray-500"
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
                                <span>{category.title}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-500 text-xs">{category.videos[0].duration}</span>
                                <svg
                                  className={`w-4 h-4 transform transition-transform ${
                                    expandedCategories[lessonIndex]?.includes(catIndex) ? 'rotate-180' : ''
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
                            {expandedCategories[lessonIndex]?.includes(catIndex) && (
                              <div className="ml-6 mt-2">
                                <div className="w-full h-px bg-violet-500 mb-4"></div>
                                <div className="flex bg-gray-200 rounded-full p-1 mb-4 w-48">
                                  {category.videos.map((video, vidIndex) => (
                                    <React.Fragment key={vidIndex}>
                                      <button
                                        onClick={() => handleVideoClick(video, 'video')}
                                        className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                          selectedTab === 'video' && selectedVideo === video
                                            ? 'bg-violet-600 text-white'
                                            : 'bg-white text-gray-700'
                                        }`}
                                      >
                                        Video
                                      </button>
                                      <button
                                        onClick={() => handleVideoClick(video, 'book')}
                                        className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                          selectedTab === 'book' && selectedVideo === video
                                            ? 'bg-violet-600 text-white'
                                            : 'bg-white text-gray-700'
                                        }`}
                                      >
                                        Book
                                      </button>
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                        <li className="flex items-center space-x-2 mt-2 opacity-60 cursor-not-allowed">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <span className="text-gray-600">Quiz</span>
                        </li>
                      </ul>
                      {selectedTab === 'book' && selectedVideo && (
                        <div className="text-gray-600 mt-2">
                          <p>📖 Book resources coming soon for {lesson.title}.</p>
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
        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
          <button
            onClick={handleQuizClick}
            className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-700">Quiz</p>
              <p className="text-sm text-gray-500">1 Assessment</p>
            </div>
          </button>
        </div>

        {/* Claim Your Course Certificate Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3 opacity-60 cursor-not-allowed">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-700">Claim your course certificate</p>
              <p className="text-sm text-gray-500">1 Assessment, New ass</p>
            </div>
            <svg
              className="w-4 h-4 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Learning Materials Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <button className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-gray-50 transition">
            <div>
              <p className="font-medium text-gray-700">Learning Materials</p>
              <p className="text-sm text-gray-500">1 Resource</p>
            </div>
            <svg
              className="w-4 h-4 text-gray-500"
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
      <div className="flex-1 p-3 m-4 bg-white rounded-2xl border border-gray-200 shadow-md">
        {isQuizActive ? (
          <div className="quiz-com w-full h-full">
            <Quiz />
          </div>
        ) : selectedTab === 'video' && selectedVideo ? (
          <div className="video-com w-full h-full">
            <CourseIntro
              courseTitle="UI/UX Designer Tutorial"
              lessonTitle={selectedVideo.title}
              videoSrc={selectedVideo.videoSrc}
            />
          </div>
        ) : selectedTab === 'book' && selectedVideo ? (
          <div className="book-com w-full h-full">
            <LessonViewer />
          </div>
        ) : (
          <div className="text-gray-500">Please select a video to view content.</div>
        )}
      </div>
    </div>
  );
};

export default LearningModule;