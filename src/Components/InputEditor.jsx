import React from "react";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const InputEditor = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "30vh",
    }),
    [placeholder]
  );
  console.log(content);
  return (
    <div className="rounded-xl border-[0.05px] border-[#98CBC6] overflow-hidden">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        config={config}
        tabIndex={1}
      />
    </div>
  );
};

export default InputEditor;
