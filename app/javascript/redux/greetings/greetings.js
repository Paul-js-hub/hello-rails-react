import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3000/api/v1/greetings";

export const getGreetings = createAsyncThunk(
    "greetings/getGreetings",
    async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data);
      return response;
    }
  );
  
  const greetingsSlice = createSlice({
    name: "greetings",
    initialState: {
      greetings: [],
      pending: true,
      error: false,
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getGreetings.pending, (state, action) => {
          const newState = state;
          newState.pending = true;
          newState.error = false;
        })
        .addCase(getGreetings.fulfilled, (state, action) => {
          const newState = state;
          const currentState = action.payload.map((greeting) => ({
            id: greeting.id,
            title: greeting.title
          }));
          newState.pending = false;
          newState.greetings = currentState;
        })
        .addCase(getGreetings.rejected, (state, action) => {
          const newState = state;
          newState.pending = false;
          newState.error = true;
        });
    },
  });
  
  export default greetingsSlice.reducer;