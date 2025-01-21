import React from "react";
import { AudioOutlined, SendOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import { BsFillSendFill } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const MessageSendForm = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-2">
      <div>
        <GrAttachment
          size={24}
          className="cursor-pointer text-slate-600 hover:text-slate-700 transition-all"
        />
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#61D0FF",
          },
          components: {
            Button: {
              colorBorder: "#61D0FF",
            },
            Input: {
              controlHeight: 50,
            },
          },
        }}
      >
        <Search
          style={{ width: "400px" }}
          size=""
          placeholder="Enter new text"
          onSearch={onSearch}
          enterButton={<BsFillSendFill size={18} />}
        />
      </ConfigProvider>
    </div>
  );
};

export default MessageSendForm;
