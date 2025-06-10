// DashboardPage.tsx
import React, { useState } from 'react';

// --- Reusable SVG Icons ---
// Typically these would be in a separate 'icons' directory.
const DownloadIcon: React.FC = () => (
  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);

const ClipboardIcon: React.FC = () => (
  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v2m-7-9v2a2 2 0 002 2h14a2 2 0 002-2v-2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const ThumbsUpIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6v-4h1v4H6l-3.5-7A2 2 0 014.764 10H10l-1-7h10l1-7H14a2 2 0 012 2v4a2 2 0 01-2 2H10a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v3z"></path>
  </svg>
);

const ThumbsDownIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3H18v4h-1V3h-1l3.5 7A2 2 0 0119.236 14H14l1 7h-10l-1 7H10a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v3z"></path>
  </svg>
);

const StarRating: React.FC<{ rating: number; maxStars?: number; size?: 'small' | 'medium' | 'large' }> = ({ rating, maxStars = 5, size = 'medium' }) => {
  const starSize = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            className={`${starSize[size]} ${starValue <= rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
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
    <div className="border-t border-gray-200 py-6 first:border-t-0">
      <div className="flex items-start space-x-4">
        <img
          src="https://via.placeholder.com/48" // Placeholder avatar
          alt={`Avatar of ${review.reviewerName}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-semibold text-gray-900">{review.reviewerName}</h4>
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

// --- Main DashboardPage Component ---
const CourseDashboardPage: React.FC = () => {
  const initialReviews: Review[] = [
    {
      id: 1,
      reviewerName: 'Narendra',
      rating: 5,
      title: 'Excellent Content and Mentorship!',
      content: 'This course provided a deep dive into the subject matter. The explanations were clear, and the practical exercises were very helpful. Narendra\'s insights were invaluable, making complex topics easy to grasp. Highly recommend!',
      likes: 12,
      dislikes: 0,
    },
    {
      id: 2,
      reviewerName: 'Priya S.',
      rating: 4,
      title: 'Very Informative, but a bit fast-paced',
      content: 'The content is top-notch and covers a wide range of topics. I found some sections moved a bit quickly for a beginner, but re-watching the lectures helped. Overall, a great resource for learning.',
      likes: 8,
      dislikes: 1,
    },
    {
      id: 3,
      reviewerName: 'Amit K.',
      rating: 5,
      title: 'Revolutionary concepts taught clearly',
      content: 'I\'ve been looking for a course like this for a long time. The way complex concepts are broken down is fantastic. The mentor is truly an expert and makes learning enjoyable. Five stars!',
      likes: 20,
      dislikes: 0,
    },
    {
      id: 4,
      reviewerName: 'Deepa V.',
      rating: 5,
      title: 'Highly Recommended for practical knowledge',
      content: 'The practical examples and real-world applications discussed in this program are incredibly useful. It\'s not just theoretical; you actually learn how to implement these concepts. The mentor\'s experience shines through.',
      likes: 15,
      dislikes: 0,
    },
    {
      id: 5,
      reviewerName: 'Rajesh M.',
      rating: 5,
      title: 'Transformative Learning Experience',
      content: 'This platform has transformed my understanding of the subject. The modules are well-structured, and the assignments challenge you to apply what you\'ve learned. Kudos to the entire team!',
      likes: 10,
      dislikes: 0,
    },
    {
      id: 6,
      reviewerName: 'Sarita L.',
      rating: 5,
      title: 'Best decision for my career growth',
      content: 'Enrolling in this course was one of the best decisions for my career. The skills I\'ve gained are directly applicable to my work, and I feel much more confident. Thank you for such a valuable program!',
      likes: 18,
      dislikes: 0,
    },
  ];

  const [loadedReviewsCount, setLoadedReviewsCount] = useState(3);

  const handleLoadMore = () => {
    setLoadedReviewsCount(prevCount => Math.min(prevCount + 3, initialReviews.length));
  };

  const reviewCounts: { [key: number]: number } = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  initialReviews.forEach(review => {
    if (reviewCounts[review.rating] !== undefined) {
      reviewCounts[review.rating]++;
    }
  });

  const totalRatings = initialReviews.length;
  const averageRating = totalRatings > 0
    ? (initialReviews.reduce((sum, review) => sum + review.rating, 0) / totalRatings).toFixed(1)
    : '0.0';

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Top Action Buttons (from Screenshot 2) */}
      <div className="bg-white p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 shadow-sm">
        <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 text-sm hover:bg-blue-50 transition-colors mb-2 sm:mb-0">
          Start Over Again
        </button>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <DownloadIcon />
            Download Certificate
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ClipboardIcon />
            Assessments & Projects
          </button>
        </div>
      </div>

      <div className="container mx-auto p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column for Course Progress and Suggested Next */}
        <div className="lg:col-span-1 space-y-8">
          {/* Complete Few Courses Card (from image_6fe717.png) */}
          <div className="relative p-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg shadow-lg text-white overflow-hidden">
            {/* Background pattern (simplified for Tailwind) */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/hexagons.png)', backgroundSize: '100px' }}></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-2">Complete Few Courses</h2>
              <p className="text-sm text-purple-200 mb-4">To Unlock over all Certificate</p>
              <p className="text-4xl font-bold mb-4">02/10</p>
              <div className="w-full bg-purple-400 h-2 rounded-full mb-6">
                <div className="bg-white h-full rounded-full" style={{ width: '20%' }}></div> {/* 02/10 = 20% */}
              </div>
              <button className="px-6 py-2 bg-white text-purple-700 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Start Now
              </button>
              {/* Trophy images - positioned absolutely */}
              <img src="https://i.imgur.com/8Q9P7Lg.png" alt="Trophy" className="absolute bottom-0 right-0 w-32 h-32 opacity-80" />
              <img src="https://i.imgur.com/Q2y2c6M.png" alt="Trophy" className="absolute bottom-0 right-16 w-24 h-24 opacity-80" />
            </div>
          </div>

          {/* Suggested Next Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Next</h3>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <img
                src="https://via.placeholder.com/400x200/333333/ff0000?text=Hexagon+Pattern" // Placeholder image for AWS course
                alt="AWS Certified solutions Architect"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AWS Certified solutions Architect</h4>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>3 Month</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-500 font-bold text-sm mr-2">↑ 50%</span>
                <div className="flex-grow bg-gray-200 h-2 rounded-full">
                  <div className="bg-purple-600 h-full rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column for Overview, Mentor, Reviews */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Section (from Screenshot 2) */}
          <section className="bg-white p-6 rounded-lg shadow-md border border-blue-500 border-dashed">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Magnadui ullamcorper bibendum dictum aliquam commodo. Etiam condimentum amet porttitor aliquet egestas amet in.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Morbi iaculis duis in feugiat in lacus netus lacus. Ut aliquam nisi fringilla enim pharetra. A sit sit nulla sed. Quis cras sensus non malesuada leo facilisi at consectetur eget. Turpis blandit et nam neque augue. Facilisis parturient dictum non lacus auctor quisque. Sapien justo sed sed. Rutrum odio channel et diam lobortis dui sapien iaculis. Etiam tellus urna malesuada sit leo amet. Libero ornare tristique neque dis in duis. Placerat elit vivamus euismod sit.
            </p>
          </section>

          {/* Mentor Section (from Screenshot 2) */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Mentor</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80" // Replace with actual mentor image URL
                alt="Mentor Pensive-Tesla"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h3 className="text-xl font-medium text-gray-900">Pensive-Tesla</h3>
                <div className="flex space-x-3 text-gray-500 text-sm mt-1">
                  {/* Placeholder for social icons - ideally, use actual icon libraries or SVGs */}
                  <a href="#" className="hover:text-blue-600">Facebook</a>
                  <a href="#" className="hover:text-blue-600">X (Twitter)</a>
                  <a href="#" className="hover:text-blue-600">Email</a>
                  <a href="#" className="hover:text-blue-600">Website</a>
                </div>
                <p className="text-gray-700 text-sm mt-2 max-w-lg">
                  For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews Section (from Screenshot 2) */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

            {/* Average Rating and Write a Review Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div className="flex items-end mb-4 sm:mb-0">
                <span className="text-6xl font-bold text-gray-900">{averageRating}</span>
                <div className="ml-3">
                  <StarRating rating={Math.round(parseFloat(averageRating))} size="medium" />
                  <span className="text-gray-500 text-sm block mt-1">{totalRatings} ratings</span>
                </div>
              </div>
              <button className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                Write A Review
              </button>
            </div>

            {/* Star Rating Breakdown */}
            <div className="mb-8">
              {Object.entries(reviewCounts)
                .sort(([ratingA], [ratingB]) => parseInt(ratingB) - parseInt(ratingA)) // Sort by rating descending
                .map(([rating, count]) => (
                  <div key={rating} className="flex items-center mb-2">
                    <span className="text-gray-700 w-8 font-medium">{rating}</span>
                    <StarRating rating={1} size="small" /> {/* Display single star for breakdown */}
                    <div className="flex-grow bg-gray-200 h-2 rounded-full mx-3">
                      <div
                        className="bg-yellow-500 h-full rounded-full"
                        style={{ width: `${(count / (Math.max(...Object.values(reviewCounts)) || 1)) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600">{count}</span>
                  </div>
                ))}
            </div>

            {/* Individual Review Cards */}
            <div>
              {initialReviews.slice(0, loadedReviewsCount).map(review => (
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

export default CourseDashboardPage;