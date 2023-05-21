import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./richChatEditor.component.css";

function RichChatEditor(props) {
  let [value, setValue] = useState(props.value || "");
  let onSubmitFct = () => {
    if (props.onSubmit) {
      props.onSubmit(value);
    }
  };

  return (
    <div className="editor_parent">
      <div className="editor_container">
        <ReactQuill
          className="editor"
          theme="snow"
          value={value}
          onChange={setValue}
          scrollingContainer={".editor_container"}
        />
      </div>
      <button onClick={onSubmitFct} className="publish_btn btn btn-primary">
        Publier
      </button>
    </div>
  );
}

export default RichChatEditor;
