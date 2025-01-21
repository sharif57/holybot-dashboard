import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import exlamIcon from "../../../assets/images/exclamation-circle.png";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const columns = [
    {
          title: "#SL",
          dataIndex: "transIs",
          key: "transIs",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Subscription",
          dataIndex: "Subscription",
          key: "Subscription",
        },
        {
          title: "JoinDate",
          key: "JoinDate",
          dataIndex: "JoinDate",
        },
        {
          title: "Action",
          key: "Review",
          aligen: 'center',
          render: (_, data) => (
            <div className="  items-center justify-around textcenter flex " >
              {/* Review Icon */}
              <img src={exlamIcon} alt="" className="btn  px-3 py-1 text-sm rounded-full cursor-pointer" onClick={() => showModal(data)} />
              {/* <Link to={'/reviews'} className="btn bg-black text-white px-3 py-1 text-sm rounded-full">
               
                View
              </Link> */}
            </div>
          ),
        },
  ];

  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      transIs: `${index + 1}`,
      name: "Henry",
      Subscription: "Basic",
      JoinDate: "1 Feb, 2020",
      Review: "See Review",
      date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
      <h3 className="text-2xl text-black mb-4 pl-2">Recent Users</h3>
      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        className="rounded-lg"
      />

      {/* Dashboard Modal */}
      <DashboardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        maxWidth="500px"
      >
        <div>
          <h2 className="text-lg text-center mb-4">User Details</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>#SL</p>
            <p>{modalData.transIs}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>User Name</p>
            <p>{modalData.name}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Email</p>
            <p>{modalData.Email}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Mobile Phone</p>
            <p>{modalData.Phone}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Service</p>
            <p>{modalData.transIs}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Date</p>
            <p>{modalData.transIs}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Time</p>
            <p>{modalData.transIs}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <p>Amount</p>
            <p>{modalData.transIs}</p>
          </div>
         
          
        </div>
      </DashboardModal>
    </div>
  );
};

export default Users;
