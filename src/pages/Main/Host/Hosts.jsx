import React, { useState } from "react";
import { Alert, Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
import { cn } from "../../../lib/utils";
import idImage from "../../../assets/images/id-card.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Hosts = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isExcuseMessageyModalOpen, setIsExcuseMessageyModalOpen] =
    useState(false);
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "key",
      key: "key",
      render: (text) => (
        <button
          onClick={(e) => {
            navigator.clipboard.writeText(e.target.innerText);
            toast.success("Copied to clipboard!", {
              position: "bottom-center",
            });
          }}
          className="outline-none active:text-blue-600 transition-all"
        >
          {"454465456" + text}
        </button>
      ),
    },
    {
      title: "Host Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Give Service",
      dataIndex: "useService",
      key: "useService",
    },

    {
      title: "Join Date",
      key: "joinDate",
      dataIndex: "joinDate",
    },
    {
      title: "Verification",
      key: "verification",
      render: (data) => (
        <button
          onClick={() => {
            if (data.verification === "Verifiy") setIsVerifyModalOpen(true);
          }}
          className={cn(
            "text-green-playground text-center w-[100px] border border-green-playground rounded-2xl px-2 py-1 text-sm",
            {
              "bg-green-playground text-white border-none":
                data.verification === "Verifiy",
              "bg-[#f7e6bf] text-red-400 border-none": data.verification === "Rejected",
            }
          )}
        >
          {data.verification}
        </button>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: (data) => (
        <Button
          onClick={() => navigate(`${data.key}`)}
          type="text"
          size="middle"
          shape="default"
          className="text-green-playground rounded-2xl"
        >
          See more
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      key: index + 1,
      name: "John Brown",
      email: "subro@gmal.com",
      useService: Math.floor(Math.random() * 99)
        .toString()
        .slice(0, 2),
      phone: "+880 158448484",
      verification:
        index % 3 === 0
          ? "Verifiy"
          : (index * 11) % 2 === 0
          ? "Verified"
          : "Rejected",
      joinDate: "16 Apr 2024",
      _id: "12112121" + index,
    });
  }
  return (
    <div className="bg-white rounded-lg py-[16px]">
      {/* <div className="w-screen overflow-x-auto"> */}
      <div className="">
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-2xl font-sans">{"Host List"}</h3>
          <div className="flex justify-end gap-x-4">
            <DatePicker
              placeholder="Date"
              style={{ width: "150px" }}
              className="custom-datepicker rounded-full text-[#222222] px-3.5 text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none outline-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
              placeholder="User Name"
            />
            <Button
              className="bg-primary text-white border-none"
              type="primary"
              shape="circle"
              icon={<IoSearch className="" />}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            showQuickJumper: true,
          }}
        />
      </div>
      {/* excuse message send modal */}
      <DashboardModal
        setIsModalOpen={setIsExcuseMessageyModalOpen}
        isModalOpen={isExcuseMessageyModalOpen}
        maxWidth={"400px"}
      >
        <div className="flex flex-col justify-between text-hash font-sans">
          <h6 className="text-center text-2xl py-[18px]">Excuse Message</h6>
          <div className="space-y-[18px]">
            <textarea
              className="w-full border-2 border-primary focus:outline-none rounded-lg px-4 py-2.5"
              name=""
              id=""
              rows="5"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className="flex justify-center py-4 px-6 gap-x-6 mt-2">
            <Button size="middle" type="primary" className="w-44 rounded-lg ">
              Send
            </Button>
          </div>
        </div>
      </DashboardModal>
      {/* verify modal */}
      <DashboardModal
        setIsModalOpen={setIsVerifyModalOpen}
        isModalOpen={isVerifyModalOpen}
        maxWidth={"400px"}
      >
        <div className="flex flex-col justify-between text-hash font-sans">
          <h6 className="font-medium text-center text-2xl py-[18px]">
            Verify Details
          </h6>
          <div className="space-y-[18px]">
            <div>
              <img
                src={idImage}
                alt=""
                className="rounded-md max-h-40 mx-auto"
              />
            </div>
            <div>
              <img
                src={idImage}
                alt=""
                className="rounded-md max-h-40 mx-auto"
              />
            </div>
          </div>
          <div className="flex justify-center py-4 px-6 gap-x-6 mt-4">
            <Button
              onClick={() => {
                setIsExcuseMessageyModalOpen(true);
                setIsVerifyModalOpen(false);
              }}
              style={{
                background: "#EE1D13",
              }}
              size="middle"
              type="primary"
              className="w-44 rounded-lg "
            >
              Cancel
            </Button>
            <Button size="middle" type="primary" className="w-44 rounded-lg ">
              Verify
            </Button>
          </div>
        </div>
      </DashboardModal>
      {/* details modal */}
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        maxWidth={"800px"}
      >
        <div className="flex flex-col justify-between text-hash font-sans">
          <h6 className="font-medium text-center text-2xl pt-[18px]">
            Guest Details
          </h6>
          <div className="space-y-[18px] divide-y divide-gray-100 border-b border-gray-100 pb-5 px-2">
            <div className="flex justify-between pt-[18px]">
              <p>Guest ID :</p>
              <p className="">#{modalData.id}45456</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Guest Name :</p>
              <p className="">{modalData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email :</p>
              <p className="">{modalData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Total Use Service :</p>
              <p className="">9</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date :</p>
              <p className="">{modalData.joinDate}</p>
            </div>
          </div>
          <div className="flex justify-center py-6 px-11 gap-x-6 mt-6">
            <Button
              style={{
                background: "#3A7D99",
              }}
              size="middle"
              type="primary"
              className="w-44 rounded-lg "
            >
              Okay
            </Button>
            <Button
              style={{
                background: "#EE1D23",
              }}
              size="middle"
              type="primary"
              className="w-44 rounded-lg "
            >
              Block
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Hosts;
