import React from 'react';
import {MainStackScreen} from './src/navigation/navigation';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

export default App = () => {
  return (
    <Provider store = { configureStore }>
      <MainStackScreen />
    </Provider>
  );
};
