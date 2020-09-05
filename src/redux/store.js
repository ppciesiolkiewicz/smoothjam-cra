import { configureStore } from '@reduxjs/toolkit';
import metronome from './reducers/metronome';
import progression from './reducers/progression';

export default configureStore({
    reducer: { metronome, progression },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true,
});
