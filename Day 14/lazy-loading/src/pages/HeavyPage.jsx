import React from 'react';

function HeavyPage() {
  const content = Array(1).fill('Lazy Loading Example ').join(' ');

  return (
    <div>
      <h2>Heavy Page Loaded Successfully!</h2>
      <p>{content}</p>
      <img
        src="https://media.tenor.com/32-amfpsB8gAAAAM/penguin-cute.gif"
        alt="Heavy Content"
        style={{ marginTop: '20px', borderRadius: '8px' }}
      />
    </div>
  );
}

export default HeavyPage;
