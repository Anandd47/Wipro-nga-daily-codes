import React, { Suspense, useState } from 'react';
import Home from './pages/Home';
import PureDisplay from './components/PureDisplay';
import ErrorBoundary from './components/ErrorBoundary';
import ModalPortal from './components/ModalPortal';

const HeavyPage = React.lazy(() => import('./pages/HeavyPage'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <h1>Lazy Loading Project</h1>

      <nav>
        <button onClick={() => setActiveSection('lazy')}>Lazy Load</button>
        <button onClick={() => setActiveSection('pure')}>Pure Component</button>
        <button onClick={() => setActiveSection('error')}>Error Boundary</button>
        <button onClick={() => setActiveSection('portal')}>Portal (Modal)</button>
      </nav>

      <hr />

      {activeSection === 'home' && <Home />}

      {activeSection === 'lazy' && (
        <Suspense fallback={<p>Loading Heavy Page...</p>}>
          <HeavyPage />
        </Suspense>
      )}

      {activeSection === 'pure' && (
        <PureDisplay message="This is a Pure Component demonstration!" />
      )}

      {activeSection === 'error' && (
        <ErrorBoundary>
          <PureDisplay message={null} /> 
        </ErrorBoundary>
      )}

      {activeSection === 'portal' && <ModalPortal />}
    </div>
  );
}

export default App;
