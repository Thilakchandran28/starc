import React, { useState } from 'react';
import CourseIntro from './CourseIntro';
import LessonViewer from './LessonViewer';
import Quiz from './QuizScreen';

type LessonContent = {
  title: string;
  duration: string;
};

const lessonData: {
  title: string;
  videos: LessonContent[];
}[] = [
  {
    title: 'Lesson 1',
    videos: [
      { title: 'Introduction to UI/UX', duration: '5:00 min' },
      { title: 'What is UI?', duration: '5:00 min' },
      { title: 'What is UX?', duration: '5:00 min' }
    ]
  },
  {
    title: 'Lesson 2',
    videos: [
      { title: 'User Research', duration: '5:00 min' },
      { title: 'Methods of User Research', duration: '5:00 min' },
      { title: 'Double Diamond Process', duration: '5:00 min' }
    ]
  }
];

const LearningModule: React.FC = () => {
  const [isLearningVideoOpen, setIsLearningVideoOpen] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState<'video' | 'book'>('video');
  const [completedVideos, setCompletedVideos] = useState<{
    [lessonIndex: number]: number[];
  }>({ 0: [0, 1, 2] });
  const [isQuizActive, setIsQuizActive] = useState(false); // New state for quiz

  const toggleLesson = (index: number) => {
    setExpandedLessons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isVideoCompleted = (lessonIndex: number, videoIndex: number) =>
    completedVideos[lessonIndex]?.includes(videoIndex);

  const handleQuizClick = () => {
    setIsQuizActive(true); // Activate quiz
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-violet-300 max-w-md mx-auto shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Learning</h2>

      {/* Learning Videos Toggle */}
      <div className="border border-violet-300 rounded-md p-4">
        <button
          onClick={() => setIsLearningVideoOpen((prev) => !prev)}
          className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-violet-50 transition"
        >
          <h3 className="text-sm text-gray-500 font-semibold">Learning Video</h3>
          <svg
            className={`w-4 h-4 transform transition-transform ${isLearningVideoOpen ? 'rotate-180' : ''}`}
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
            {lessonData.map((lesson, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => toggleLesson(index)}
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
                    className={`w-4 h-4 transform transition-transform ${expandedLessons.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedLessons.includes(index) && (
                  <div className="mt-2 border border-violet-200 rounded-md p-3 text-sm">
                    {/* Toggle buttons */}
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() => {
                          setSelectedTab('video');
                          setIsQuizActive(false); // Deactivate quiz when switching tabs
                        }}
                        className={`px-3 py-1 rounded-full border ${selectedTab === 'video'
                          ? 'bg-violet-600 text-white border-violet-600'
                          : 'bg-white text-gray-700 border-gray-300'
                          }`}
                      >
                        Video
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTab('book');
                          setIsQuizActive(false); // Deactivate quiz when switching tabs
                        }}
                        className={`px-3 py-1 rounded-full border ${selectedTab === 'book'
                          ? 'bg-violet-600 text-white border-violet-600'
                          : 'bg-white text-gray-700 border-gray-300'
                          }`}
                      >
                        Book
                      </button>
                    </div>

                    {selectedTab === 'video' ? (
                      <ul className="space-y-2">
                        {lesson.videos.map((video, vIndex) => (
                          <li key={vIndex} className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              {isVideoCompleted(index, vIndex) ? (
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2}
                                  viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2}
                                  viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.879a1 1 0 001.234.97l6.518-1.709a1 1 0 00.748-.97v-2.121a1 1 0 00-.748-.971z" />
                                </svg>
                              )}
                              <span>{video.title}</span>
                            </div>
                            <span className="text-gray-500 text-xs">{video.duration}</span>
                          </li>
                        ))}
                        <li className="flex items-center space-x-2 mt-2 opacity-60 cursor-not-allowed">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-gray-600">Quiz</span>
                        </li>
                      </ul>
                    ) : (
                      <div className="text-gray-600">
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

      {/* Learning Materials */}
      <div className="mt-4 border-t pt-4">
        <button className="w-full flex justify-between items-center text-left py-2 px-2 rounded hover:bg-gray-50 transition">
          <div>
            <p className="font-medium text-gray-700">Learning Materials</p>
            <p className="text-sm text-gray-500">2 Resource</p>
          </div>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Quiz Button */}
      <button
        onClick={handleQuizClick}
        className="mt-4 bg-gray-100 p-4 rounded-md flex justify-between items-center w-full text-left"
      >
        <div>
          <p className="font-medium text-gray-700">Quiz</p>
          <p className="text-sm text-gray-500">1 Assessment</p>
        </div>
      </button>

      {/* Locked Certificate */}
      <div className="mt-2 bg-gray-100 p-4 rounded-md flex justify-between items-center opacity-60 cursor-not-allowed">
        <div>
          <p className="font-medium text-gray-700">Claim your course certificate</p>
          <p className="text-sm text-gray-500">1 Assessment, New ass</p>
        </div>
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>

      {/* Conditional Rendering of Components */}
      <div
        className="mt-4"
        style={{
          position: 'relative',
          left: '500px',
          bottom: '430px'
        }}
      >
    
        {isQuizActive ? (
          <div className="quiz-com">
            <Quiz/>
          </div>
        ) : selectedTab === 'video' ? (
          <div className="video-com" style={{ display: 'flex' }}>
            <CourseIntro courseTitle={''} lessonTitle={''} />
          </div>
        ) : (
          <div className="book-com">
            <LessonViewer />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningModule;