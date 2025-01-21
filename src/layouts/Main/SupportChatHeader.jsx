import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import profileImage from "../../assets/images/dash-profile.png";
import { TbBellRinging } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Select } from 'antd';
import logoImg from '../../assets/images/logo1.png';
import bellImg from '../../assets/images/bell.png';

const SupportChatHeader = () => {
  const navigate = useNavigate();
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [notificationPopup, setNotificationPopup] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNotificationPopup(false);
  }, [loacatin.pathname]);

  return (

    <div className="w-full h-[88px] flex justify-between items-center rounded-sm py-[16px] px-[32px]">
      <div className="text-start space-y-0.5">
        {/* <p className="text-sm md:text-xl font-light">
          {"Welcome, Jane Cooper"}
        </p>
        <p className="text-sm md:text-xl">{"Have a nice day!"}</p> */}
        <img src={logoImg} alt="" className="w-40 h-40 object-contain" />
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#000000", width: '20px', height: '20px', objectFit: 'contain' }} count={1}>
            {/* <TbBellRinging
              style={{ cursor: "pointer" }}
              className={` w-6 h-6 rounded-full shadow-sm  font-bold transition-all`}
            /> */}
            <img src={bellImg} alt="" className="bg-lightGray p-2 rounded-full" />
          </Badge>
        </div>
        <div className="flex items-center">
          <div>
            <img src={profileImage} alt="" className="rounded-full h-[42px] w-[42px]" />
          </div>
          <Select
            defaultValue=""
            style={{
              width: 40,
            }}
            bordered={false}
            suffixIcon={<MdOutlineKeyboardArrowDown color="black" fontSize={20} />}
            onChange={handleChange}
            options={[
              {
                value: 'Jane Cooper',
                label: '',
              },
              {
                value: 'lucy',
                label: '',
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportChatHeader;
