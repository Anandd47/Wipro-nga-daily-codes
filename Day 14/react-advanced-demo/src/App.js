import React, { useState, useEffect, Suspense, lazy } from "react";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import ExplodingChild from "./components/ExplodingChild";
import ModalPortal from "./components/ModalPortal";

const LazyLoadedComponent = lazy(() => import("./components/LazyLoadedComponent"));

function App() {
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState(" Pure Component Example");
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLazy, setShowLazy] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>React Advanced Concepts Demo</h2>

      <h3>Pure Component Demo</h3>
      <p>Seconds (parent state): {seconds}</p>
      <PureDisplay title={title} count={count} />
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setCount(count + 1)}>Change Count</button>
        <button
          onClick={() =>
            setTitle((prev) =>
              prev === "Pure Component Example"
                ? " Title Has Been Changed!"
                : "Pure Component Example"
            )
          }
          style={{ marginLeft: "10px" }}
        >
          Change Title
        </button>
      </div>

      <hr />


      <h3>Error Boundary Demo</h3>
      <ErrorBoundary>
        <ExplodingChild />
      </ErrorBoundary>

      <hr />

      <h3>Portal (Modal) Demo</h3>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <ModalPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>This is Modal Content</h3>
        <p>Rendered inside #modal-root (check DOM)</p>
      </ModalPortal>

      <hr />

      <h3>Lazy Loading Demo</h3>
      <button onClick={() => setShowLazy(true)}>Load Lazy Component</button>

      <Suspense
        fallback={
          <img
            src="https://media.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="Loading..."
            style={{
              width: "60px",
              display: "block",
              margin: "10px auto",
            }}
          />
        }
      >
        {showLazy && <LazyLoadedComponent />}
      </Suspense>
    </div>
  );
}

export default App;
