import { configureStore } from '@reduxjs/toolkit';
import metronome from './reducers/metronome';
import progression from './reducers/progression';
import pitch from './reducers/pitch';

export default configureStore({
    reducer: { metronome, progression, pitch },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true,
});
