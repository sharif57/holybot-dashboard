import { Button } from "antd";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import hostImage from "../../../assets/images/host-details-image.png";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FcClock } from "react-icons/fc";
import HostReviewSlider from "../../../Components/User/HostReviewSlider";
import Swal from "sweetalert2";

const HostDetails = () => {
  const navigate = useNavigate();
  const handleBlock = () => {
    Swal.fire({
      title:"Block Host !!",
      text: "Are you sure you want to block this host?",
      showCancelButton: true,
      confirmButtonText: "     Block    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // removeFromLocalStorage("token", null);
        // navigate("/auth");
      }
    });
  };
  const hostData = {
    id: 1,
    name: "John Doe",
    email: "vC0lU@example.com",
    joinDate: "2022-01-01",
  };
  return (
    <div className="bg-white rounded-lg">
      <div className="bg-info py-4 px-6 rounded-t-lg flex gap-2.5 items-center text-3xl font-semibold text-white">
        <FaChevronLeft
          onClick={() => navigate(-1)}
          size={24}
          className="mt-1"
        />{" "}
        <h3>Host Details</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 p-6">
        <div>
          <h3 className="text-2xl font-medium">Personal Information:</h3>
          <div className="space-y-[18px] divide-y divide-gray-100 p-6 border border-gray-100 rounded-lg shadow-sm pb-5 mt-5 text-hash">
            <div className="flex justify-between">
              <p>Guest ID :</p>
              <p className="">#{hostData.id}45456</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Guest Name :</p>
              <p className="">{hostData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email :</p>
              <p className="">{hostData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Total Use Service :</p>
              <p className="">9</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date :</p>
              <p className="">{hostData.joinDate}</p>
            </div>
          </div>
        </div>
        <div className="px-6">
          <h3 className="text-2xl font-medium">Post:</h3>
          <div className=" grid grid-cols-2 gap-3 pt-5">
            <div className="space-y-2 text-opacity-95">
              <p className="text-xl">Aesthetic Vila</p>
              <h1 className="font-bold text-4xl text-slate-600 font-sans">
                4.0
              </h1>
              <Rating
                // className=""
                readonly
                placeholderRating={3}
                emptySymbol={<BsStarFill className="text-gray-400 mx-0.5" />}
                placeholderSymbol={
                  <BsStarFill className="text-yellow-400 mx-0.5" />
                }
                fullSymbol={<BsStarFill className="text-yellow-400 mx-0.5" />}
              />
              <p className="text-[#6B6B6B] font-medium">52 Reviws</p>
              <div className="text-lg font-medium">
                Price: 30<span className="font-sans">$</span>
                <sub className="text-slate-400 font-normal">/hour</sub>
              </div>
              <p className="text-sm text-[#646464]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia harum nihil ea. Harum quos iste similique earum, numquam
                sequi dolor quia rerum hic suscipit. Totam nulla deleniti
                perspiciatis autem voluptatum! Reiciendis magnam, perferendis id
                iusto doloribus laborum asperiores dfsdfs dfsaf jkhjkh hjg autem
                obcaecati.
              </p>
            </div>
            <div className="space-y-3.5">
              <div>
                <img src={hostImage} alt="" />
              </div>
              <div
                className="flex justify-between items-center gap-2
              "
              >
                <p className="flex items-center gap-1.5">
                  <IoMdRadioButtonOn className="text-[#1B7443]" size={20} />{" "}
                  Available:
                </p>
                <p className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 rounded-md">
                  <FcClock size={19} /> <span>8:00 AM</span>
                </p>
                <p className="text-[#1B7443]">to</p>
                <p className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 rounded-md">
                  <FcClock size={19} /> <span>7:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-395px)] overflow-hidden relative px-2 py-4">
        <HostReviewSlider />
      </div>
      <div className="flex justify-center py-6 px-11 gap-x-6 mt-6">
        <Button
          style={{
            background: "#3A7D99",
          }}
          size="large"
          type="primary"
          className="w-3/12 text-lg"
        >
          Okay
        </Button>
        <Button
        onClick={handleBlock}
          style={{
            background: "#EE1D23",
          }}
          size="large"
          type="primary"
          className="w-3/12  text-lg"
        >
          Block
        </Button>
      </div>
    </div>
  );
};

export default HostDetails;
