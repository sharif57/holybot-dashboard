import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import { PiCameraPlus } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";

const EditMyProfile = () => {
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const profileData = {
    name: "Jane Kooper",
    email: "enrique@gmail.com",
    phone: "+880 150597212",
    profile: dashProfile,
  };
  // console.log(code);

  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Personal information</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-lightGray/40 pb-3">
            Personal information
          </h3>
          <div className="w-full">
            <Form
              name="basic"
              layout="vertical"
              className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                name: profileData.name,
                email: profileData.email,
              }}
            >
              <div className="col-span-3 space-y-6 ">
                <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
                  <div className="my-2">
                    <img
                      src={dashProfile}
                      alt=""
                      className="h-28 w-28 rounded-full border-4 border-black"
                    />
                  </div>
                  <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
                  <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
                </div>
              </div>
              <div className="col-span-9 space-y-[14px] w-full">
                <Form.Item
                  className="text-lg  font-medium text-black -mb-1"
                  label="Name"
                  name="name"
                >
                  <Input
                    readOnly
                    size="large"
                    className="h-[53px] rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg  font-medium text-black"
                  label="Email"
                  name="email"
                >
                  <Input
                    readOnly
                    size="large"
                    className="h-[53px] rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg text-[#222222] font-medium"
                  label="Phone Number"
                  name="phone"
                >
                  <PhoneCountryInput />
                </Form.Item>
                <Form.Item className="flex justify-end pt-4">
                  <Button
                    // onClick={(e) => navigate(`edit`)}
                    size="large"
                    type="primary"
                    className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMyProfile;
