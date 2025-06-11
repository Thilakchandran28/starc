import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mentor from "../Assets/Image-60.png";
import RightSideBar from "./RightSideBar";
import RightSideBarComp from "./RightSideBarComp";

const APlusIcon: React.FC = () => (
  <svg
    className="w-5 h-5 text-gray-500"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const LockIcon: React.FC = () => (
  <svg
    className="w-5 h-5 fill-current text-white"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M400 192h-24v-72C376 53.31 322.7 0 256 0S136 53.31 136 120v72H112c-17.67 0-32 14.33-32 32v256c0 17.7 14.33 32 32 32h288c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zm-72 0H184v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </svg>
);

const FileTextIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 text-blue-500 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    ></path>
  </svg>
);
const ContinueIcon: React.FC = () => (
  <svg
    className="w-5 h-5 fill-current text-white"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M96 52v408l320-204L96 52z" />
  </svg>
);

// Assessment and Projects Components
type AssessmentStatus = "completed" | "Submitted" | "Failed" | "In Progress";

interface Assessment {
  id: number;
  type: "Assessment" | "Project";
  number: number;
  title: string;
  score: string;
  status: AssessmentStatus;
  date: string;
}

interface AssessmentRowProps {
  assessment: Assessment;
}

const AssessmentRow: React.FC<AssessmentRowProps> = ({ assessment }) => {
  const getStatusDisplay = (status: AssessmentStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="flex items-center text-green-600 font-medium">
            <CheckCircleIcon className="mr-1" /> completed
          </span>
        );
      case "Submitted":
        return (
          <span className="flex items-center text-blue-600 font-medium">
            <FileTextIcon className="mr-1" /> Submitted
          </span>
        );
      case "Failed":
        return (
          <span className="flex items-center text-red-600 font-medium">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Failed
          </span>
        );
      case "In Progress":
        return (
          <span className="flex items-center text-yellow-600 font-medium">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            In Progress
          </span>
        );
      default:
        return status;
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-2 pr-4">
        <APlusIcon />
        <span className="text-gray-700 font-medium whitespace-nowrap">
          {assessment.type} {assessment.number}
        </span>
      </div>
      <div className="text-gray-800 font-medium px-4">{assessment.title}</div>
      <div className="text-gray-600 text-sm px-4 whitespace-nowrap">
        {assessment.score}
      </div>
      <div className="px-4 whitespace-nowrap">
        {getStatusDisplay(assessment.status)}
      </div>
      <div className="text-gray-500 text-sm pl-4 whitespace-nowrap text-right">
        {assessment.date}
      </div>
    </div>
  );
};

type Course = {
  id: string;
  image: string;
  title: string;
  progress: number;
  duration: string;
  status: string;
};

// --- Reusable SVG Icons ---
const DownloadIcon: React.FC = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    ></path>
  </svg>
);
const PlayIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-black"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const RestartIcon: React.FC = () => (
  <svg
    className="w-7 h-6 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4V1L8 5l4 4V6a6 6 0 016 6 6 6 0 11-6-6"
    />
  </svg>
);

const ClipboardIcon: React.FC = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 17v2m-7-9v2a2 2 0 002 2h14a2 2 0 002-2v-2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    className={`w-5 h-5 text-green-500 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const ThumbsUpIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6v-4h1v4H6l-3.5-7A2 2 0 014.764 10H10l-1-7h10l1-7H14a2 2 0 012 2v4a2 2 0 01-2 2H10a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v3z"
    ></path>
  </svg>
);

const ThumbsDownIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14H5.236a2 2 0 01-1.789-2.894l-3.5-7A2 2 0 018.736 3H18v4h-1V3h-1l3.5 7A2 2 0 0119.236 14H14l1 7h-10l-1 7H10a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v3z"
    ></path>
  </svg>
);

const StarRating: React.FC<{
  rating: number;
  maxStars?: number;
  size?: "small" | "medium" | "large";
}> = ({ rating, maxStars = 5, size = "medium" }) => {
  const starSize = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5",
  };

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            className={`${starSize[size]} ${
              starValue <= rating ? "text-yellow-400" : "text-gray-300"
            } fill-current`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.424 8.219 1.194-5.967 5.819 1.406 8.188L12 18.896l-7.326 3.856 1.406-8.188-5.967-5.819 8.219-1.194L12 .587z" />
          </svg>
        );
      })}
    </div>
  );
};

// --- ReviewCard Component ---
interface Review {
  id: number;
  reviewerName: string;
  rating: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className=" py-6 first:border-t-0">
      <div className="flex items-start space-x-4">
        <img
          src={mentor}
          alt={`Avatar of ${review.reviewerName}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-semibold text-gray-900">
                {review.reviewerName}
              </h4>
              <StarRating rating={review.rating} size="small" />
            </div>
            <div className="flex space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <ThumbsUpIcon />
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-red-500">
                <ThumbsDownIcon />
                <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
          <h5 className="font-medium text-gray-800 mb-1">{review.title}</h5>
          <p className="text-gray-600 text-sm">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main CourseDashboardPage Component ---
const OngoingCourseDashboardPage: React.FC<{
  course: Course;
  onBack: () => void;
}> = ({ course, onBack }) => {
  const [showAssessments, setShowAssessments] = useState(false);

  const initialReviews: Review[] = [
    {
      id: 1,
      reviewerName: "Narendra",
      rating: 5,
      title: "Excellent Content and Mentorship!",
      content: `This ${course.title} course provided a deep dive into the subject matter. The explanations were clear, and the practical exercises were very helpful. Narendra's insights were invaluable, making complex topics easy to grasp. Highly recommend!`,
      likes: 12,
      dislikes: 0,
    },
    {
      id: 2,
      reviewerName: "Priya S.",
      rating: 4,
      title: "Very Informative, but a bit fast-paced",
      content: `The ${course.title} content is top-notch and covers a wide range of topics. I found some sections moved a bit quickly for a beginner, but re-watching the lectures helped. Overall, a great resource for learning.`,
      likes: 8,
      dislikes: 1,
    },
    {
      id: 3,
      reviewerName: "Amit K.",
      rating: 5,
      title: "Revolutionary concepts taught clearly",
      content: `I've been looking for a course like ${course.title} for a long time. The way complex concepts are broken down is fantastic. The mentor is truly an expert and makes learning enjoyable. Five stars!`,
      likes: 20,
      dislikes: 0,
    },
    {
      id: 4,
      reviewerName: "Deepa V.",
      rating: 5,
      title: "Highly Recommended for practical knowledge",
      content: `The practical examples and real-world applications discussed in ${course.title} are incredibly useful. It's not just theoretical; you actually learn how to implement these concepts. The mentor's experience shines through.`,
      likes: 15,
      dislikes: 0,
    },
    {
      id: 5,
      reviewerName: "Rajesh M.",
      rating: 5,
      title: "Transformative Learning Experience",
      content: `This ${course.title} course has transformed my understanding of the subject. The modules are well-structured, and the assignments challenge you to apply what you've learned. Kudos to the entire team!`,
      likes: 10,
      dislikes: 0,
    },
    {
      id: 6,
      reviewerName: "Sarita L.",
      rating: 5,
      title: "Best decision for my career growth",
      content: `Enrolling in ${course.title} was one of the best decisions for my career. The skills I've gained are directly applicable to my work, and I feel much more confident. Thank you for such a valuable program!`,
      likes: 18,
      dislikes: 0,
    },
  ];

  const initialAssessments: Assessment[] = [
    {
      id: 1,
      type: "Assessment",
      number: 1,
      title: "Foundation of AWS",
      score: "(80/100)",
      status: "completed",
      date: "May 7, 2025 11:00 AM",
    },
    {
      id: 2,
      type: "Assessment",
      number: 2,
      title: "Core AWS Services",
      score: "(80/100)",
      status: "completed",
      date: "May 7, 2025 11:00 AM",
    },
    {
      id: 3,
      type: "Assessment",
      number: 3,
      title: "Storage Solutions",
      score: "(80/100)",
      status: "completed",
      date: "May 7, 2025 11:00 AM",
    },
    {
      id: 4,
      type: "Project",
      number: 1,
      title: "Databases in AWS",
      score: "Reviewed",
      status: "Submitted",
      date: "May 7, 2025 11:00 AM",
    },
    {
      id: 5,
      type: "Assessment",
      number: 4,
      title: "Cost Optimization",
      score: "(80/100)",
      status: "completed",
      date: "May 7, 2025 11:00 AM",
    },
  ];
  const handleToggleAssessments = () => {
    setShowAssessments((prevState) => !prevState);
  };

  const [loadedReviewsCount, setLoadedReviewsCount] = useState(3);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setLoadedReviewsCount((prevCount) =>
      Math.min(prevCount + 3, initialReviews.length)
    );
  };

  const reviewCounts: { [key: number]: number } = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  initialReviews.forEach((review) => {
    if (reviewCounts[review.rating] !== undefined) {
      reviewCounts[review.rating]++;
    }
  });

  const totalRatings = initialReviews.length;
  const averageRating =
    totalRatings > 0
      ? (
          initialReviews.reduce((sum, review) => sum + review.rating, 0) /
          totalRatings
        ).toFixed(1)
      : "0.0";

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 w-full ">
      {/* Back Button */}
      <div className="container mx-auto p-6 w-full ">
        <button
          onClick={onBack}
          className="mb-4 text-purple-600 hover:underline"
        >
          ← Back to Courses
        </button>

        {/* Top Section: Course Info (Left) and Progress/Suggested (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Left: Course Info and Actions */}
          <div className="lg:col-span-3 space-y-6 w-full">
            <h1 className="text-2xl font-bold flex items-center">
              {course.title}
              <span className="text-base font-normal text-green-600 ml-1 flex items-center">
                <CheckCircleIcon className="ml-3 text-lg" />
                {course.status === "100%" ? "Completed" : course.status}
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 text-sm">
              <span className="text-purple-700 font-semibold mr-1">
                Technology:
              </span>
              <span className="mr-3">
                By KenyWhite In Business, IT & Software,
              </span>
              <span className="ml-1 text-gray-600">4.8 (280)</span>
            </div>
            <p className="text-gray-500 text-sm">Last Visited: Sept 12, 2024</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                className="px-4 py-2 rounded-2xl border border-blue-600 text-white bg-violet-500 text-sm flex items-center justify-center transition-colors"
                onClick={() => {
                  navigate("/learningoverview");
                  window.scrollTo(0, 0);
                }}
              >
                <ContinueIcon />
                Continue Now
              </button>
              <button className="px-4 py-2 rounded-2xl bg-gray-400  text-white text-sm flex items-center justify-center transition-colors">
                <LockIcon/>
                Download Certificate
              </button>
              <button
                className="px-4 py-2 rounded-2xl border border-gray-300 text-gray-700 text-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={handleToggleAssessments}
              >
                <ClipboardIcon />
                Assessments & Projects
              </button>
            </div>

            {/* overview section */}
            <section className=" p-1 rounded-lg w-full">
              {showAssessments && (
                <section className="p-1 rounded-lg mb-5">
                  <h2 className="text-2xl font-semibold mb-4">
                    Assessments & Projects
                  </h2>
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px] md:min-w-full">
                      {initialAssessments.map((assessment) => (
                        <AssessmentRow
                          key={assessment.id}
                          assessment={assessment}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}

              <h3>Resume Now</h3>
              <div className="bg-white w-1/2 h-20 gap-3 mb-3 flex items-center p-4 rounded-md   ">
                <PlayIcon />
                <div className="flex justify-between w-full">
                  <h4>What is UI</h4>
                  <p className="text-gray-400">5:00 min</p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {course.title} is a comprehensive course designed to provide
                  in-depth knowledge and practical skills. This program covers
                  essential concepts, hands-on projects, and real-world
                  applications to ensure you are well-prepared for your career.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Duration: {course.duration}. Status: {course.status}.
                </p>
              </section>
            </section>

            {/* Mentor section */}
            <section className="p-6 rounded-lg ">
              <h2 className="text-2xl font-semibold mb-4">Mentor</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={mentor}
                  alt="Mentor Pensive-Tesla"
                  className="w-25 h-25 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    Pensive-Tesla
                  </h3>
                  <div className="flex space-x-3 text-gray-500 text-sm mt-1">
                    <a href="#" className="hover:text-blue-600">
                      Facebook
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      X (Twitter)
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      Email
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      Website
                    </a>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 max-w-lg">
                    Expert mentor for {course.title}, with extensive experience
                    in delivering practical and engaging content.
                  </p>
                </div>
              </div>
            </section>
          </div>

        
        </div>

        {/* Bottom Section: Overview, Mentor, Reviews */}
        <div className="space-y-8 mt-8">
          {/* Reviews Section */}
          <section className="rounded-lg  w-full">
            <div className="bg-white p-6  shadow-md mb-5">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div className="flex items-end mb-4 sm:mb-0">
                  <span className="text-6xl font-bold text-gray-900">
                    {averageRating}
                  </span>
                  <div className="ml-3">
                    <StarRating
                      rating={Math.round(parseFloat(averageRating))}
                      size="medium"
                    />
                    <span className="text-gray-500 text-sm block mt-1">
                      {totalRatings} ratings
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Write A Review
                </button>
              </div>
              <div className="mb-8">
                {Object.entries(reviewCounts)
                  .sort(
                    ([ratingA], [ratingB]) =>
                      parseInt(ratingB) - parseInt(ratingA)
                  )
                  .map(([rating, count]) => (
                    <div key={rating} className="flex items-center mb-2">
                      <span className="text-gray-700 w-8 font-medium">
                        {rating}
                      </span>
                      <StarRating rating={1} size="small" />
                      <div className="flex-grow bg-gray-200 h-2 rounded-full mx-3">
                        <div
                          className="bg-yellow-500 h-full rounded-full"
                          style={{
                            width: `${
                              (count /
                                (Math.max(...Object.values(reviewCounts)) ||
                                  1)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="p-6">
              {initialReviews.slice(0, loadedReviewsCount).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {loadedReviewsCount < initialReviews.length && (
              <div className="text-center mt-6">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default OngoingCourseDashboardPage;
