import { FaArrowLeft, FaRegEyeSlash } from "react-icons/fa6"
import { MdLockOutline } from "react-icons/md"
import { LuMailOpen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-lg mt-8 w-[610px] h-[468px] mx-auto py-10 px-8">
                <div className="flex flex-col  w-full max-w-md mx-auto mt-10 p-4 rounded-lg space-y-4">
                    <div className="flex items-center gap-2">
                        <FaArrowLeft />
                        <h1>Forgot password</h1>
                    </div>
                    <h1>Please enter your email address  to reset your password </h1>
                    {/* Input Fields */}
                    <div className="flex flex-col w-full space-y-4">
                        <div>
                            <h1 className="mb-3">Enter your email</h1>
                            <div className="relative flex items-center">
                                {/* Lock Icon */}
                                <LuMailOpen className="absolute left-3 " />
                                {/* Input Field */}
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className="w-full pl-10 pr-10 py-2 border border-black rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>
                        </div>
                        {/* // ))} */}
                    </div>

                    {/* Send OTP Button */}
                    <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800" onClick={(e) => navigate(`verify-email`)}>
                        Send OTP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
