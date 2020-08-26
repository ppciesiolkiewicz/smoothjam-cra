import { combineReducers } from 'redux';
import metronome from './reducers/metronome';
import progression from './reducers/progression';

export default combineReducers({ metronome, progression });