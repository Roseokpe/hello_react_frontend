import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('https://greetingapp.onrender.com/messages');
    const greeting = await response.json();
    return greeting[0];
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, (_state, action) => action.payload);
  },
});

export default greetingSlice.reducer;