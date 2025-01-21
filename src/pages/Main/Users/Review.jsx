
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Review() {
    const [selectedReview, setSelectedReview] = useState(null);  

    const reviews = [
        {
            name: "Akik Studio",
            email: 'sharifmahamud@gmail.com',
            date: 'Oct 24, 2023',
            report: "Akik Studio is a great place to work. Their design is modern and clean. Their support is always there. I would recommend this company to anyone looking for a great job.",
            user: "John Doe"
        },
        {
            name: "Creative Inc.",
            email: 'ArfiullIslam@gmail.com',
            date: 'Oct 25, 2023',
            report: "Creative Inc. has a dynamic team and innovative ideas. They provide great mentorship and growth opportunities.",
            user: "Jane Smith"
        },
        {
            name: "Design Pro",
            email: "rasel@gmail.com",
            date: 'Oct 26, 2023',
            report: "Design Pro is a very professional team with excellent design skills. Their client handling is top-notch.",
            user: "Samuel Lee"
        }
    ];

    const handleDeleteStatus = () => {
        Swal.fire({
            title: "Delete Status",
            text: "Are you sure you want to delete this Status?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "The status has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const handleBlockUser = () => {
        Swal.fire({
            title: "Block User",
            text: "Are you sure you want to block this user?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Block"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Blocked!",
                    text: "The user has been blocked.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div>
            <div className="px-6 pb-5 flex gap-6 items-center">
                <Link to={'/users'}>
                    <svg width="22" height="44" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.37879 20.6965L13.75 10.3254L16.3423 12.9177L7.26728 21.9927L16.3423 31.0677L13.75 33.66L3.37879 23.2889C3.03509 22.9451 2.84201 22.4788 2.84201 21.9927C2.84201 21.5066 3.03509 21.0403 3.37879 20.6965Z" fill="#052255" />
                    </svg>
                </Link>

                <h3 className="text-[32px] font-semibold text-blue-600">Review</h3>
            </div>

            <div className="flex gap-8">
                {/* Left Side: Display Reviews */}
                <div className="w-2/3 space-y-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedReview(review)}  
                            className={`bg-[#e8e7fe] p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out 
                                ${selectedReview === review ? 'bg-[#d1caff] border-2 border-blue-500' : ''} 
                                hover:bg-primary`}
                                                      >
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold">{review.name}</h1>
                                <div onClick={handleDeleteStatus} className="bg-white p-4 rounded-lg cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z" fill="#FF5252" />
                                    </svg>

                                </div>
                            </div>

                            <div className="flex items-center justify-between space-x-2 pt-2">
                                <hr className="border-t border-2 w-3/5 border-gray-400" />
                                <h1 className="text-xs font-semibold whitespace-nowrap">{review.date}</h1>
                            </div>

                            <div className="flex items-start  gap-6 pt-4">
                                <div>
                                    <h1 className="text-xl font-semibold mb-2">Quality</h1>
                                    <p className="bg-green-500 text-center py-3 text-white font-semibold rounded-lg">5.0</p>
                                </div>
                                <div>
                                    <p>{review.report}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-2 ">
                                <h1 className="text-xl font-sans">04</h1>
                                <svg width="24" height="24" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_18329_2206)">
                                        <path d="M28.905 7.52C28.5626 7.27327 28.1668 7.11073 27.7499 7.04557C27.3329 6.98042 26.9064 7.01448 26.505 7.145C25.4463 7.44273 24.3497 7.58422 23.25 7.565C21.6249 7.47679 20.0315 7.07971 18.555 6.395C16.7311 5.55145 14.7581 5.07733 12.75 5C8.41503 5 6.75003 6.5 6.45003 6.71C6.30649 6.85069 6.19269 7.01879 6.11538 7.20432C6.03808 7.38984 5.99885 7.58902 6.00003 7.79V30.5C6.00003 30.8978 6.15806 31.2794 6.43937 31.5607C6.72067 31.842 7.1022 32 7.50003 32C7.89785 32 8.27938 31.842 8.56069 31.5607C8.84199 31.2794 9.00003 30.8978 9.00003 30.5V24.05C10.1953 23.5924 11.4712 23.3831 12.75 23.435C14.3751 23.5232 15.9686 23.9203 17.445 24.605C19.269 25.4486 21.2419 25.9227 23.25 26C25.0583 26.0683 26.8571 25.7085 28.5 24.95C28.9428 24.742 29.3182 24.4137 29.5835 24.0026C29.8487 23.5915 29.993 23.1142 30 22.625V9.665C29.9995 9.24646 29.9 8.83398 29.7097 8.4612C29.5194 8.08843 29.2437 7.76592 28.905 7.52ZM27 22.385C25.8043 22.841 24.5287 23.0502 23.25 23C21.6229 22.9138 20.0282 22.5113 18.555 21.815C16.7276 20.9836 14.7561 20.515 12.75 20.435C11.4863 20.4132 10.2252 20.5595 9.00003 20.87V8.63C10.1925 8.161 11.4698 7.94642 12.75 8C14.3772 8.08622 15.9719 8.48872 17.445 9.185C19.2725 10.0164 21.2439 10.485 23.25 10.565C24.5145 10.5837 25.7758 10.4323 27 10.115V22.385Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18329_2206">
                                            <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Display selected review details */}
                <div className="w-1/3 bg-[#f8f8f8] p-6 rounded-lg">
                    {selectedReview ? (
                        <div>
                            <h1 className="text-4xl font-semibold text-center font-serif">Report Details</h1>
                            
                            <div className="mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
                                <h1 className="text-xl font-semibold text-gray-900">{selectedReview.user}</h1>
                                <p className="text-sm text-gray-600">{selectedReview.email}</p>
                                <div className="mt-4">
                                    <p className="bg-white p-2 rounded-lg">{selectedReview.report}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-4xl font-semibold text-center font-serif">Select a user and  to see report details</p>
                    )}
                </div>
            </div>

            <div className="bg-white p-8 shadow-xl flex justify-center items-center gap-8 bg-fixed border-2 mt-8 rounded-lg">
                <Link to={'/'}>
                    <button className="bg-playground hover:bg-gray-500 px-16 font-semibold text-lg py-3 rounded-full text-white uppercase transition duration-300">
                        Back
                    </button>
                </Link>
                <button onClick={() => handleBlockUser()} className="bg-red-500 hover:bg-red-600 px-10 font-semibold text-lg py-3 rounded-full text-white uppercase transition duration-300">
                    Block User
                </button>
            </div>

        </div>
    );
}
