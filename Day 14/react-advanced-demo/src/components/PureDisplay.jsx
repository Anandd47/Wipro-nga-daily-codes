import React from "react";
const PureDisplay = React.memo(({ title, count }) => {
  console.log("PureDisplay re-rendered");
  return (
    <div
      style={{
        border: "1px solid #999",
        borderRadius: "8px",
        padding: "10px",
        width: "250px",
        textAlign: "center",
        background: "#f5f5f5",
        marginBottom: "10px",
      }}
    >
      <h3 style={{ color: "#007bff" }}>{title}</h3>
      <p>Count: {count}</p>
    </div>
  );
});

export default PureDisplay;
