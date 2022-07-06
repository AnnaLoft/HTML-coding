import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ipDetails: ''
}

export const ipSlice = createSlice({
    name: 'ip',
    initialState,
    reducers: {
        updateRemote: (state, action) => {
            state.ipDetails = action.payload;
        }
    }
});

export const { updateRemote } = ipSlice.actions;

export const updateRemoteIp = () => async (dispatch) => {
    const response = await fetch('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708').then(result => result.json());
    const { IPv4 } = response;

    dispatch(updateRemote(IPv4));
};

export const selectIp = (state) => state.ip.ipDetails;

export default ipSlice.reducer;