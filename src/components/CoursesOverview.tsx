// import React, { useState } from 'react';
// import NavDashboardPage  from './AssesNav'
// import CoursePageLayout from './ui/CoursePageLayout'
// import SideSchedule from './Schedulebar';
// import LearningModule from './LearningModule';
// import LearningOverview from './LearningOverview';
// import CompletedCourse from './CompletedCourse'
// type Course = {
//   image: string;
//   title: string;
//   progress: number;
//   duration: string;
//   status: string;
// };

// const CoursesOverview: React.FC = () => {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
 
//   const courses: Course[] = [
//     { image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
//     { image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },

//   ];

//   if (selectedCourse) {
//     if(selectedCourse.status ==="100%"){
//       return <CompletedCourse course={selectedCourse} onBack={()=> selectedCourse(null)}/>
//     }
//     // Course Details View
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <button
//           onClick={() => setSelectedCourse(null)}
//           className="mb-4 text-purple-600 hover:underline"
//         >
//           ← Back to Courses
//         </button>       
//         <NavDashboardPage selectedCourse ={selectedCourse}/>
//         <CoursePageLayout/>
//       </div>
//     );
//   }

//   // Course List View
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{height:"330px",width:"920px"}}>
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedCourse(course)}
//             className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
//           >
//             <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
//             <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
//               <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
//             </div>
//             <p className="text-sm text-gray-600 mb-2">{course.duration}</p>
//             <p className="text-sm text-gray-60">{course.status}</p>
//           </div>
//         ))}
//       </div>
//       <SideSchedule/> 
//       <LearningOverview/>
//      </div>
//   );
// };

// export default CoursesOverview;

// Moses
// import React, { useState } from 'react';
// import NavDashboardPage from './AssesNav';
// import CoursePageLayout from './ui/CoursePageLayout';
// import SideSchedule from './Schedulebar';
// import LearningOverview from './LearningOverview';
// import CourseDashboardPage from './CompletedCourse';
// import OngoingCourseDashboardPage from './OngoingCourse';

// type Course = {
//   id: string;
//   image: string;
//   title: string;
//   progress: number;
//   duration: string;
//   status: string;
// };

// interface childProps {
//   sendMessage: (course:Course)=>void;
// }

// const CoursesOverview: React.FC <childProps> = ({sendMessage}) => {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);



//   const courses: Course[] = [
//     { id: '1', image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
//     { id: '2', image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
//     { id: '3', image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { id: '4', image: 'https://via.placeholder.com/150', title: 'Google Cloud Advanced', progress: 75, duration: '1 Month', status: '75%' },
//     { id: '5', image: 'https://via.placeholder.com/150', title: 'DevOps Essentials', progress: 75, duration: '1 Month', status: '75%' },
//     { id: '6', image: 'https://via.placeholder.com/150', title: 'Kubernetes Basics', progress: 75, duration: '1 Month', status: '75%' },
//   ];

//   if (selectedCourse) {
//     // Conditional rendering based on course status
//     if (selectedCourse.status === 'Completed') {
//       return <CourseDashboardPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
//     }else{
//       return <OngoingCourseDashboardPage course={selectedCourse} onBack={()=>setSelectedCourse(null)}/>
//     }
//     // Course Details View for non-completed courses
//     // return (
//     //   <div className="p-6 bg-gray-100 min-h-screen">
//     //     <button
//     //       onClick={() => setSelectedCourse(null)}
//     //       className="mb-4 text-purple-600 hover:underline"
//     //     >
//     //       ← Back to Courses
//     //     </button>
//     //     <OngoingCourseDashboardPage course={selectedCourse} />
//     //     <CoursePageLayout />
//     //   </div>
//     // );
//   }

//   const handleSelectedCourse=(course:Course)=>{
//     setSelectedCourse(course);
//     sendMessage(course)
//   }
//   // Course List View
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans text-gray-800 w-full">
//       <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             onClick={() => handleSelectedCourse(course)}
//             className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
//           >
//             <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
//             <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
//               <div
//                 className="bg-purple-600 h-2.5 rounded-full"
//                 style={{ width: `${course.progress}%` }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-600 mb-2">{course.duration}</p> 
//             <p className="text-sm text-gray-600">{course.status}</p>
//           </div>
//         ))}
//       </div>
//       {/* <SideSchedule /> */}
//       {/* <LearningOverview /> */}
//     </div>
//   );
// };

// export default CoursesOverview;


// Responsiveness

// import React, { useState } from 'react';
// import NavDashboardPage  from './AssesNav'
// import CoursePageLayout from './ui/CoursePageLayout'
// import SideSchedule from './Schedulebar';
// import LearningModule from './LearningModule';
// import LearningOverview from './LearningOverview';
// import CompletedCourse from './CompletedCourse'
// type Course = {
//   image: string;
//   title: string;
//   progress: number;
//   duration: string;
//   status: string;
// };

// const CoursesOverview: React.FC = () => {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
 
//   const courses: Course[] = [
//     { image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
//     { image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
//     { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },

//   ];

//   if (selectedCourse) {
//     if(selectedCourse.status ==="100%"){
//       return <CompletedCourse course={selectedCourse} onBack={()=> selectedCourse(null)}/>
//     }
//     // Course Details View
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <button
//           onClick={() => setSelectedCourse(null)}
//           className="mb-4 text-purple-600 hover:underline"
//         >
//           ← Back to Courses
//         </button>       
//         <NavDashboardPage selectedCourse ={selectedCourse}/>
//         <CoursePageLayout/>
//       </div>
//     );
//   }

//   // Course List View
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{height:"330px",width:"920px"}}>
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedCourse(course)}
//             className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
//           >
//             <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
//             <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
//               <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
//             </div>
//             <p className="text-sm text-gray-600 mb-2">{course.duration}</p>
//             <p className="text-sm text-gray-60">{course.status}</p>
//           </div>
//         ))}
//       </div>
//       <SideSchedule/> 
//       <LearningOverview/>
//      </div>
//   );
// };

// export default CoursesOverview;


import React, { useState } from 'react';
import NavDashboardPage from './AssesNav';
import CoursePageLayout from './ui/CoursePageLayout';
import SideSchedule from './Schedulebar';
import LearningOverview from './LearningOverview';
import CourseDashboardPage from './CompletedCourse';
import OngoingCourseDashboardPage from './OngoingCourse';

type Course = {
  id: string;
  image: string;
  title: string;
  progress: number;
  duration: string;
  status: string;
};

interface childProps {
  sendMessage: (course:Course)=>void;
}

const CoursesOverview: React.FC <childProps> = ({sendMessage}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);



  const courses: Course[] = [
    { id: '1', image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
    { id: '2', image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
    { id: '3', image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { id: '4', image: 'https://via.placeholder.com/150', title: 'Google Cloud Advanced', progress: 75, duration: '1 Month', status: '75%' },
    { id: '5', image: 'https://via.placeholder.com/150', title: 'DevOps Essentials', progress: 75, duration: '1 Month', status: '75%' },
    { id: '6', image: 'https://via.placeholder.com/150', title: 'Kubernetes Basics', progress: 75, duration: '1 Month', status: '75%' },
  ];

  if (selectedCourse) {
    // Conditional rendering based on course status
    if (selectedCourse.status === 'Completed') {
      return <CourseDashboardPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }else{
      return <OngoingCourseDashboardPage course={selectedCourse} onBack={()=>setSelectedCourse(null)}/>
    }
    // Course Details View for non-completed courses
    // return (
    //   <div className="p-6 bg-gray-100 min-h-screen">
    //     <button
    //       onClick={() => setSelectedCourse(null)}
    //       className="mb-4 text-purple-600 hover:underline"
    //     >
    //       ← Back to Courses
    //     </button>
    //     <OngoingCourseDashboardPage course={selectedCourse} />
    //     <CoursePageLayout />
    //   </div>
    // );
  }

  const handleSelectedCourse=(course:Course)=>{
    setSelectedCourse(course);
    sendMessage(course)
  }
  // Course List View
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 w-full">
      <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleSelectedCourse(course)}
            className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{course.duration}</p> 
            <p className="text-sm text-gray-600">{course.status}</p>
          </div>
        ))}
      </div>
      {/* <SideSchedule /> */}
      {/* <LearningOverview /> */}
    </div>
  );
};

export default CoursesOverview
