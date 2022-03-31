import { createSlice } from "@reduxjs/toolkit";

const initial = {
  data: [],
  suggestions: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    dataPerPage: 5,
  },
};

const slice = createSlice({
  name: "searchApi",
  initialState: initial,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state, action) => {
      state.data = [];
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
    clearSuggestions(state, action) {
      state.suggestions = [];
    },
  },
});

export const { setData, clearData, setSuggestions, clearSuggestions } =
  slice.actions;
export default slice.reducer;
