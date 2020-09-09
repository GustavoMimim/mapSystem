import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainStack from './src/Routes.js';

export default App = () => {
  return (
    <PaperProvider>
      <MainStack />
    </PaperProvider>
  );
};