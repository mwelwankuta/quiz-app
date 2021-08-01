import React from 'react';
import AppRouter from './AppRouter';
import PostsContextProvider from './context';

const App: React.FC = () => {
  return (
    <PostsContextProvider>
      <AppRouter />
    </PostsContextProvider>
  );
}

export default App;
