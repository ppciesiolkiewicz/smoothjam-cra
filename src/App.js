import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import BeatController from './components/BeatController';
import Metronome from './components/Metronome';

function App() {
  return (
    <Provider store={store}>
      <BeatController />
      <Metronome />
    </Provider>
  );
}

export default App;
