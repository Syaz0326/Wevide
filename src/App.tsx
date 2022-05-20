import React from 'react';
import { SingleContent } from './components/Contents/SingleContent';
import { MainLayout } from './components/Layout';
import { useGetCurrentContent } from './recoil/currentContent';

function App() {
  const currentContent = useGetCurrentContent();

  return (
    <MainLayout>
      <SingleContent />
    </MainLayout>
  );
}

export default App;
