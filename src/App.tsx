import React, { useState } from 'react';
import './App.css';
import { AppProvider } from '@/provider/app';
import { MainLayout } from './components/Layout';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <h1>hoge</h1>
      </MainLayout>
    </AppProvider>
  );
}

export default App;
