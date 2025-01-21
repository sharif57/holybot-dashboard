import { useEffect, useState } from 'react'
import SupportChatHeader from '../../../layouts/Main/SupportChatHeader';
import { MdKeyboardArrowLeft } from "react-icons/md";
import ChatHeads from './ChatHeads';
import chatHeadImage from '../../../assets/images/chatHeadPerson.png';
import { Link } from 'react-router-dom';

const ChatPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='relative bg-lightBlueBg h-screen'>
            <div className={`w-full z-10 transition-all ${isScrolled
                ? "sticky top-0 bg-white shadow-md p-0"
                : "sticky top-0 bg-transparent p-[24px]"
                }`}>
                <SupportChatHeader />
            </div>

            {/* Back button */}
            <Link to='/' className="p-4  text-center flex items-center justify-center absolute top-28 left-14">
                <button
                    className="w-fit bg-transparent text-black border border-black px-4 py-[7px] flex items-center justify-center gap-2 text-sm outline-none rounded-lg"
                >
                    <div>
                        <MdKeyboardArrowLeft className="text-black text-lg" />
                    </div>
                    <p className="text-black font-light">Back</p>
                </button>
            </Link>

            {/* Chat */}
            <div className='container mx-auto max-w-7xl space-y-12'>
                <div className='bg-white rounded-md flex items-center justify-start p-2'>
                    <img src={chatHeadImage} alt="" className='w-14 h-14 object-contain' />
                    <h1>Banedict Fring Dron</h1>
                </div>

                <ChatHeads />
            </div>
        </div>
    )
}

export default ChatPage
