import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function ModalPortal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalPortal;
