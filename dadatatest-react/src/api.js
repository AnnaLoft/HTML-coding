import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    ip: "",
    status: 'idle',
    error: null
  }
  
  export const fetchPosts = createAsyncThunk('ip/getIp', async () => {
    const response = await client.get('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708')
    return response.data
  })