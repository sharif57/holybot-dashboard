import React, { useState } from "react";
import { Button, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";

const StudioPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

 
  const columns = [
    {
      title: "#SI No.",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Studio Company",
      dataIndex: "Company",
      key: "Company",
    },
    {
      title: "Studio Neighborhood",
      dataIndex: "Neighborhood",
      key: "Neighborhood",
    },
    {
      title: "Studio City",
      dataIndex: "City",
      key: "City",
    },
    {
      title: "Action",
      key: "action",
      render: (_, data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-[#FF8400]"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];


  const data = Array.from({ length: 3 }, (_, index) => ({
    key: index,
    transIs: `#${index + 1}`,
    Company: "Adamos Studio",
    Neighborhood: "Hollywood",
    City: "LA",

  }));

  return (
    <div className="space-y-[24px] border-2 rounded-lg">
      <div className="rounded-lg py-[16px]">
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-playground">
            Approve Request
          </h3>
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

      
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      >
        <div className=" flex flex-col justify-between">


          {/* Action Buttons */}
          <div className="flex items-center flex-col gap-6 ">
            <Button
              className="w-1/2 rounded-xl font-medium"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => console.log("Download action")}
            >
              Approve
            </Button>

            <Button
              className="w-1/2 rounded-xl font-medium"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => console.log("Print action")}
            >
              Deny
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default StudioPost;
