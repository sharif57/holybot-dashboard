import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi';
import chatImageAvatar from '../../../assets/images/chat-image-avatar.png';
import { IoMdSend } from "react-icons/io";

const ChatHeads = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Hi there!" },
    { id: 2, sender: "other", text: "Hello! How can I help you?" },
    { id: 3, sender: "user", text: "Hi there!" },
    { id: 4, sender: "other", text: "Hello! How can I help you?" },
    { id: 5, sender: "user", text: "Hi there!" },
    { id: 6, sender: "other", text: "Hello! How can I help you?" },
    { id: 7, sender: "user", text: "Hi there!" },
    { id: 8, sender: "other", text: "Hello! How can I help you?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { id: Date.now(), sender: "user", text: inputValue }]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div className=" flex flex-col">
      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"
              }`}
          >
            {message.sender === "other" && (
              <img
                src={chatImageAvatar}
                alt="Participant"
                className="w-10 h-10 rounded-full mr-2"
              />
            )}
            <div
              className={`max-w-[75%] px-4 py-2 text-sm ${message.sender === "user"
                ? "bg-black text-white rounded-full rounded-br-lg"
                : "bg-lightGray text-white rounded-full rounded-bl-lg"
                }`}
            >
              {message.text}
            </div>
            {/* {message.sender === "user" && (
              <img
                src="https://via.placeholder.com/40"
                alt="You"
                className="w-10 h-10 rounded-full ml-2"
              />
            )} */}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-2 bg-white flex items-center rounded-full">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full text-gray-700 outline-none placeholder:text-xs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 text-blue-500"
        >
          <IoMdSend />

        </button>
      </div>
    </div>
  )
}

export default ChatHeads
