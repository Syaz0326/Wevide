import React from 'react';
import './App.css';
import { MainLayout } from './components/Layout';
import { useGetCurrentContent } from './recoil/currentContent';

function App() {
  const currentContent = useGetCurrentContent();

  return (
    <MainLayout>
      <div className="App">{JSON.stringify(currentContent)}</div>
    </MainLayout>
  );
}

export default App;
