import React from "react";

function LazyLoadedComponent() {
  console.log("LazyLoadedComponent loaded!");
  return (
    <div style={{ padding: 10, border: "1px solid #aaa", borderRadius: "6px" }}>
      <h3>Lazy Loaded Component</h3>
      <p>This component was loaded on demand using React.lazy!</p>
    </div>
  );
}

export default LazyLoadedComponent;
