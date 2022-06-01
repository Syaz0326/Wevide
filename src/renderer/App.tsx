import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Content } from '@Common/types';
import { SingleContent } from './components/Contents/SingleContent';
import { MainLayout } from './components/Layout';
import { useGetCurrentContent } from './recoil/currentContent';

declare global {
  interface Window {
    myAPI: MyAPI;
  }
}

export interface MyAPI {
  getContents: () => Promise<Content[]>;
}

function App() {
  const currentContent = useGetCurrentContent();
  const contentList = useRef<Content[]>([]);
  const [render, setRender] = useState(false);
  const reRender = useCallback(() => setRender(!render), [render]);

  useEffect(() => {
    if (
      contentList.current
        .map((content) => content.id)
        .includes(currentContent.id)
    ) {
      return;
    }
    contentList.current = [...contentList.current, currentContent];
    reRender();
  }, [currentContent, reRender]);

  return (
    <MainLayout>
      {contentList.current
        .filter((content) => content.type === 'SINGLE')
        .map((content) => (
          <SingleContent
            key={content.id}
            id={content.id}
            url={content.link as URL}
            sx={{
              display: content.id === currentContent.id ? 'inherit' : 'none',
            }}
          />
        ))}
    </MainLayout>
  );
}

export default App;
