import React, { useState, useRef } from 'react';
import SubmissionSuccess from './SubmissionSuccess';
import { useNavigate } from 'react-router-dom';
import courseService from '@/services/courseService';
import { toast } from 'sonner';

interface EnrollProps {
    courseId: string;
    title: string;
    price: number;
    discountedPrice?: number;
    discount?: number;
    instructor: string;
    duration: string;
    level: string;
}

const Enroll: React.FC<EnrollProps> = ({ 
    courseId, 
    title, 
    price, 
    discountedPrice, 
    discount, 
    instructor,
    duration,
    level
}) => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
    const navigate = useNavigate();
    
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        resume: null as File | null,
    });

    // State for error messages
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        resume: '',
    });

    // Ref for file input
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle input changes for text fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: '' }));
    };

    // Trigger file input click
    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
    };

    // Handle direct enrollment without form
    const handleDirectEnroll = async () => {
        try {
            setLoading(true);
            const response = await courseService.enrollInCourse(courseId);
            toast.success("Successfully enrolled in course!");
            navigate(`/course/${courseId}/learn`);
        } catch (error: any) {
            console.error("Error enrolling in course:", error);
            
            // Check if this is the "already enrolled" error
            if (error.response && error.response.status === 400 && 
                error.response.data && error.response.data.message === 'User already enrolled in this course') {
                setAlreadyEnrolled(true);
                toast.info("You're already enrolled in this course. Redirecting to learning page...");
                
                // Wait a moment to show the message before redirecting
                setTimeout(() => {
                    navigate(`/course/${courseId}/learn`);
                }, 2000);
            } else {
                toast.error("Failed to enroll in course. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            firstName: formData.firstName ? '' : 'Enter your First name',
            lastName: formData.lastName ? '' : 'Enter your Last name',
            email: formData.email ? '' : 'Enter your Email',
            phoneNumber: formData.phoneNumber ? '' : 'Enter your Phone Number',
            resume: formData.resume ? '' : 'Please upload a resume',
        };
        setErrors(newErrors);
        
        // Check if there are any errors
        const hasErrors = Object.values(newErrors).some((error) => error !== '');
        if (!hasErrors) {
            // Proceed with form submission (e.g., API call)
            console.log('Form submitted:', formData);
            setSuccess(true);
            // Optionally, you can show SubmissionSuccess here by managing state
        }
    };

    if (success) {
        return <SubmissionSuccess />;
    }

    if (alreadyEnrolled) {
        return (
            <div className="w-[100%] bg-white p-6 shadow-lg rounded-lg border border-[#8A63FF4D]">
                <div className="text-center">
                    <div className="text-green-600 text-xl mb-4">
                        You're already enrolled in this course
                    </div>
                    <p className="text-gray-600 mb-6">
                        Redirecting to the learning page...
                    </p>
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#8A63FF] mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-[100%] bg-white p-6 shadow-lg rounded-lg border border-[#8A63FF4D]">
            {/* Course Info Section */}
            <div className="mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                <div className="flex items-center mb-2">
                    <span className="text-gray-600 text-sm">Instructor: </span>
                    <span className="text-gray-800 text-sm ml-1 font-medium">{instructor}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-gray-600 text-sm">Duration: </span>
                    <span className="text-gray-800 text-sm ml-1 font-medium">{duration}</span>
                </div>
                <div className="flex items-center mb-4">
                    <span className="text-gray-600 text-sm">Level: </span>
                    <span className="text-gray-800 text-sm ml-1 font-medium">{level}</span>
                </div>
                <div className="flex items-center">
                    {discount ? (
                        <>
                            <span className="text-2xl font-bold text-[#8A63FF]">${discountedPrice?.toFixed(2)}</span>
                            <span className="text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
                            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded ml-2">
                                {discount}% OFF
                            </span>
                        </>
                    ) : (
                        <span className="text-2xl font-bold text-[#8A63FF]">${price.toFixed(2)}</span>
                    )}
                </div>
            </div>

            {/* Direct Enrollment Button */}
            <button
                onClick={handleDirectEnroll}
                disabled={loading}
                className="w-full bg-[#8A63FF] text-white py-3 rounded-lg font-semibold hover:bg-[#7A53EF] transition mb-4"
            >
                {loading ? "Processing..." : "Enroll Now"}
            </button>

            <div className="text-center text-gray-500 text-sm mb-4">- OR -</div>

            {/* Express Interest Form */}
            <h2 className="text-md font-semibold text-[#8A63FF] mb-4">Express Interest in {title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            style={{
                                boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                            }}
                            placeholder="First Name"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            style={{
                                boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                            }}
                            placeholder="Last Name"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        style={{
                            boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        style={{
                            boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        placeholder="Phone Number"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Upload a Resume</label>
                    <div className="flex items-center text-sm">
                        <button
                            type="button"
                            onClick={handleFileButtonClick}
                            className="bg-[#8A63FF] text-white px-1 w-[35%] rounded-sm mr-0"
                        >
                            Select a file
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                        />
                        <span className="text-gray-500 text-xs pl-1">
                            {formData.resume ? formData.resume.name : 'Supported Format PDF, Word'}
                        </span>
                    </div>
                    {errors.resume && (
                        <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#8A63FF] text-white py-3 rounded-lg font-semibold hover:bg-[#7A53EF] transition"
                >
                    Submit Interest
                </button>
            </form>
        </div>
    );
};

export default Enroll;
