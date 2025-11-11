import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to the Lazy Loading Demo</h2>
      <p>This project demonstrates key React concepts:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li> Lazy Loading (Code Splitting)</li>
        <li> Pure Component</li>
        <li> Error Boundary</li>
        <li> Portal (Modal)</li>
      </ul>
      <p>Use the buttons above to explore each feature!</p>
    </div>
  );
}

export default Home;
