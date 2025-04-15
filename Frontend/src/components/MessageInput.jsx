import React, { useRef } from "react";
import { useState } from "react";
const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);
  return <div>MessageInput</div>;
};

export default MessageInput;
