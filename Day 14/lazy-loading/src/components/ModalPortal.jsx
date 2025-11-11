import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ModalPortal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open &&
        ReactDOM.createPortal(
          <div style={styles.overlay}>
            <div style={styles.modal}>
              <h3>Portal Modal Example</h3>
              <p>This modal is rendered using React Portal!</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default ModalPortal;
