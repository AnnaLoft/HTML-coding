
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer";
import ipReducer from '../features/ip/ipSlice';
import locationReducer from '../features/ip/locationSlice';

const store = configureStore({
    reducer: {
        ip: ipReducer,
        location: locationReducer,
    }
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;