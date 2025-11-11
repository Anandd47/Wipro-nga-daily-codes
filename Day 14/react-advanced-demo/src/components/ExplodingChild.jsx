import React, { useState } from "react";

function ExplodingChild() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("crashed!");
  }

  return (
    <div>
      <p>This component can crash intentionally.</p>
      <button onClick={() => setCrash(true)}>Cause Error</button>
    </div>
  );
}

export default ExplodingChild;
