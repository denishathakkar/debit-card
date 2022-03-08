import React from 'react';
import {MainStackScreen} from './src/navigation/navigation';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';

export default App = () => {
  return (
    <Provider store = { configureStore }>
      <MainStackScreen />
    </Provider>
  );
};
