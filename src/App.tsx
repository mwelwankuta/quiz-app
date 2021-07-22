import React, { FC } from 'react';
import AppRouter from './AppRouter';
import PostsContextProvider from './context';

const App: FC = () => {
  return (
    <PostsContextProvider>
      <AppRouter />
    </PostsContextProvider>
  );
}

export default App;
