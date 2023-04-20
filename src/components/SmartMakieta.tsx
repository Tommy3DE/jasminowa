import React, { useEffect, useRef } from "react";

const TEST_GUID = '6b248da8-fe5e-4253-8fae-b443c131c970';
const SM_GUID = 'b6e31bf8-3035-45b0-9bf9-e66aeea813e3';

const smContainerStyle = {
    top: "0",
    left: "0",
    width: "100%",
    height: "calc(100vh - 120px)",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    borderRadius: "6px",
    overflow: "hidden",
    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.20)"
}

 const smStyle = {
  height: "100%",
  width: "100%",
  position: "relative"
 }

const SmartMakieta = () => {
  const viewerRef = useRef(null);
  const smartModelRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const script = document.createElement("script");
      script.src = 'https://3destatesmartmakietaemb.z6.web.core.windows.net/v1/js/main.js';
      script.async = true;
      script.onload = () => {
        smartModelRef.current = window.SM.init(SM_GUID, 'smart-makieta', {}, {
          forceLang: 'pl',
        })
      }
      document.body.appendChild(script);
    }
  }, [])


  return (
    <div className="smart-makieta-container" style={smContainerStyle} ref={viewerRef}>
      <div id="smart-makieta" style={smStyle} />
    </div>
  );
};

export default SmartMakieta;
