import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locationDetails: ''
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        updateRemote: (state, action) => {
            state.locationDetails = action.payload;
        }
    }
});

export const { updateRemote } = locationSlice.actions;

export const updateRemoteLocation = () => async (dispatch) => {
    const response = await fetch('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708').then(result => result.json());
    const { city } = response;

    dispatch(updateRemote(city));
};

export const selectCity = (state) => state.location.locationDetails;

export default locationSlice.reducer;