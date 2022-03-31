import { createSlice } from "@reduxjs/toolkit";

const initial = {
  data: [],
  suggestions: [],
  sort: "",
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
    setSort(state, action) {
      state.sort = action.payload;
    },
    clearSort(state, action) {
      state.sort = "";
    },
  },
});

export const {
  setData,
  clearData,
  setSuggestions,
  clearSuggestions,
  setSort,
  clearSort,
} = slice.actions;
export default slice.reducer;
