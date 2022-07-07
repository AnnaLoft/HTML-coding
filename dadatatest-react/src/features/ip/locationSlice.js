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

export const updateRemoteLocation = (ipData) => async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Token 3ec2b42c32789f092783bb2cb9f0a6d372ec29fe");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders
    };
    const response = await fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ipData}`, requestOptions)
        .then(result => result.json());
    const city = response.location.value;

    dispatch(updateRemote(city));
};

export const selectCity = (state) => state.location.locationDetails;

export default locationSlice.reducer;