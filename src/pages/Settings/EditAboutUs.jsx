import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditAboutUs = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const placeholder = "Enter your update about us...";
  console.log(content);
  return (
    <div className="min-h-[75vh] flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <PageHeading title={"Edit About Us"} backPath={-1} />

        <div className="h-full">
          <ReactQuill
            placeholder={placeholder}
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
            className="h-[50vh]"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="px-8 w-[250px]"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditAboutUs;
