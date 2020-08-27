import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import Controls from './components/Controls';
import ProgressionVisualizer from './components/ProgressionVisualizer';
import Metronome from './components/Metronome';

function App() {
  return (
    <Provider store={store}>
      <Metronome />
      <Controls />
      <ProgressionVisualizer />
    </Provider>
  );
}

export default App;
