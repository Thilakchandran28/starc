import React, { useState, useRef } from 'react';
import SubmissionSuccess from './SubmissionSuccess';

const CardDetail: React.FC = () => {
    const [success, setSuccess] = useState(true);
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        resume: null as File | null, // Add resume to formData
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
            setSuccess(false)
            // Optionally, you can show SubmissionSuccess here by managing state
        }
    };

    return (
        <div className="flex col-span-1 min-h-[800px] bg-gray-50 font-mont">
            {success ? (<div>
                {/* Main Content Area (unchanged) */}
                <div className="w-2 p-6">
                    {/* ... (previous content unchanged) ... */}
                </div>

                {/* Form Sidebar */}
                <div className="w-[90%] h-[60%] bg-white p-6 shadow-lg rounded-lg border border-[#8A63FF4D]">
                    <h2 className="text-md font-semibold text-[#8A63FF] mb-4">Enroll my interest (course name)</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                {/* <label className="block text-gray-600 mb-1">First Name</label> */}
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
                                {/* <label className="block text-gray-600 mb-1">Last Name</label> */}
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    style={{
                                        boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                                    }} placeholder="Last Name"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            {/* <label className="block text-gray-600 mb-1">Email</label> */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                style={{
                                    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                                }} placeholder="Email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            {/* <label className="block text-gray-600 mb-1">Phone Number</label> */}
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                style={{
                                    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
                                }} placeholder="Phone Number"
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
                                    className="bg-[#8A63FF] text-white px-1 py-2 w-[35%] rounded-sm mr-0"
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
                            className="w-full bg-[#8A63FF] text-white py-3 rounded-full font-semibold hover:bg-[#8A63FF] transition"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>) : (
                <div>
                    <SubmissionSuccess />
                </div>
            )}


        </div>
    );
};

export default CardDetail;