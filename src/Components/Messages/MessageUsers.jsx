import React from "react";
import { ConfigProvider, Input } from "antd";
import { GoDotFill } from "react-icons/go";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { cn } from "../../lib/utils";

const { Search } = Input;
const users = [
  {
    name: "John Doe",
    newMessage: "I Want to buy a product from you.",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: false,
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: false,
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: false,
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: true,
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
  },
  {
    name: "John Doe",
    newMessage: "Hello, how are you?",
    active: false,
  },
];

const MessageUsers = ({ className }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className={cn("pt-4", className)}>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#61D0FF",
          },
          components: {
            Button: {
              colorBorder: "#61D0FF",
            },
            Input: {
              controlHeightLG: 49,
            },
          },
        }}
      >
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          size="large"
          className="w-full"
        />
      </ConfigProvider>
      <div
        id="message-uesrs"
        className="mt-5 pr-2 space-y-2.5 max-h-[69vh] overflow-y-scroll"
      >
        {users.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-5 border border-gray-50 p-2 pr-4 rounded shadow-sm cursor-pointer hover:bg-gray-100 transition-all"
          >
            <div className="flex justify-setart items-center gap-2">
              <img
                src={user.image}
                alt="user"
                className="h-[45px] w-[45px] rounded-full drop-shadow-lg"
              />
              <div className="space-y-0.5 text-hash">
                <p className="font-semibold text-sm">
                  {user?.name || "User Name"}
                </p>
                <p className="max-w-[20ch] truncate text-xs">
                  {user?.newMessage || ""}
                </p>
              </div>
            </div>
            {user.active ? (
              <GoDotFill
                className="text-yellow-300 outline outline-gray-300 outline-[1.99px] outline-offset-[-2.75px] rounded-full"
                size={19}
              />
            ) : (
              <MdRadioButtonUnchecked className="text-gray-300" size={20} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageUsers;
