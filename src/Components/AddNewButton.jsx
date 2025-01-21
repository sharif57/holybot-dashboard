import { Button } from "antd";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddNewButton = ({ text, path }) => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <Button
        onClick={() => navigate(path ? path : "add-new")}
        type="primary"
        size="large"
        className="rounded-full px-8"
      >
        <FiPlus /> {text}
      </Button>
    </div>
  );
};

export default AddNewButton;
