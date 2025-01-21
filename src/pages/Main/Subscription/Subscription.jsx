// import React, { useState } from "react";
// import { Button, DatePicker, Input, Table } from "antd";
// import { FiAlertCircle } from "react-icons/fi";
// import DashboardModal from "../../../Components/DashboardModal";
// import { IoSearch } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import exlamIcon from "../../../assets/images/exclamation-circle.png";

import { Link } from "react-router-dom";

// const Subscription = () => {
//    const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalData, setModalData] = useState({});

//     const showModal = (data) => {
//       setIsModalOpen(true);
//       setModalData(data);
//     };

//   const columns = [
//       {
//             title: "#SL",
//             dataIndex: "transIs",
//             key: "transIs",
//             render: (text) => <a>{text}</a>,
//           },
//           {
//             title: "Name",
//             dataIndex: "name",
//             key: "name",
//           },
//           {
//             title: "Email",
//             dataIndex: "Email",
//             key: "Email",
//           },
//           {
//             title: "Phone Number",
//             key: "Phone",
//             dataIndex: "Phone",
//           },
//           {
//             title: "Action",
//             key: "Review",
//             aligen: 'center',
//             render: (_, data) => (
//               <div className="  items-center justify-around textcenter flex " >
//                 {/* Review Icon */}
//                 <img src={exlamIcon} alt="" className="btn  px-3 py-1 text-sm rounded-full cursor-pointer" onClick={() => showModal(data)} />
//                 {/* <Link to={'/reviews'} className="btn bg-black text-white px-3 py-1 text-sm rounded-full">

//                   View
//                 </Link> */}
//               </div>
//             ),
//           },
//     ];

//     const data = [];
//     for (let index = 0; index < 20; index++) {
//       data.push({
//         transIs: `${index + 1}`,
//         name: "Henry",
//         Email: "sharif@gmail.com",
//         Phone: "+12746478994",
//         Review: "See Review",
//         date: "16 Apr 2024",
//         _id: index,
//       });
//     }
//   return (
//     <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
//       <h3 className="text-2xl text-black mb-4 pl-2">Drivers</h3>
//       {/* Ant Design Table */}
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={{ position: ["bottomCenter"] }}
//         className="rounded-lg"
//       />

//       {/* Dashboard Modal */}
//       <DashboardModal
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         maxWidth="500px"
//       >
//         <div>
//           <h2 className="text-lg text-center mb-4">User Details</h2>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>#SL</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>User Name</p>
//             <p>{modalData.name}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Email</p>
//             <p>{modalData.Email}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Mobile Phone</p>
//             <p>{modalData.Phone}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Service</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Date</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Time</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Amount</p>
//             <p>{modalData.transIs}</p>
//           </div>

//         </div>
//       </DashboardModal>
//     </div>
//   )
// }

// export default Subscription

export default function Subscription() {
  const plans = [
    {
      title: "Premium",
      price: "$125",
      billing: "Yearly",
      features: [
        "Cancel anytime without a long-term commitment.",
        "Spread costs across smaller, manageable payments.",
        "Ideal for testing or temporary projects.",
        "Easily switch plans as needs change.",
        "Avoid a big initial payment.",
      ],
    },
    {
      title: "Basic",
      price: "$99",
      billing: "Monthly",
      features: [
        "Pay less per month compared to monthly plans.",
        "One-time annual payment, no monthly reminders.",
        "Exclusive features or perks often included.",
        "Ideal for long-term goals and stability.",
        "Many plans offer enhanced  .",
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center  p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {plan.title}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/ {plan.billing}</span>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">✔</span>
                    <p className="text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>
              <Link to={'/settings/editSubscription'}>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                  Edit
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
