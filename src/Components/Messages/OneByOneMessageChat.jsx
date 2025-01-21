import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { cn } from "../../lib/utils";

const OneByOneMessageChat = ({ messages, className }) => {
  const messagesEndRef = useRef(null);

  // Group messages by date
  const groupedMessages = groupMessagesByDate(messages);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        // behavior: "smooth"
      });
    }
  }, [groupedMessages]);

  return (
    <div
      id="message-uesrs"
      className={cn("max-h-[65vh] overflow-y-scroll pr-3", className)}
    >
      <div>
        {Object.keys(groupedMessages).map((date) => (
          <div key={date} className="my-1">
            <div className="text-center">
              {dayjs(date).format("MMMM D, YYYY")}
            </div>
            {groupedMessages[date].map((message) => (
              <div
                key={message._id}
                className={`w-fit ${
                  message.sender === "user1"
                    ? " text-right ml-auto"
                    : "text-left"
                }`}
              >
                <div
                  className={cn("mb-1 p-3 text-white rounded-md", {
                    "bg-green-playground rounded-tl-none":
                      message.sender !== "user1",
                    " bg-info rounded-br-none": message.sender == "user1",
                  })}
                >
                  {message.message}
                </div>
                <div className="text-xs text-gray-400">
                  {dayjs(message.timestamp).format("h:mm A")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

// Utility function
const groupMessagesByDate = (messages) => {
  return messages.reduce((grouped, message) => {
    const date = dayjs(message.timestamp).format("YYYY-MM-DD");
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(message);
    return grouped;
  }, {});
};

export default OneByOneMessageChat;
