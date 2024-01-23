import { createSlice } from "@reduxjs/toolkit";

type TModule = {
  module: string | null;
};

const initialState: TModule = {
  module: null,
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    createModule: (state, action) => {
      const { module } = action.payload;
      state.module = module;
    },
  },
});

export const { createModule } = moduleSlice.actions;

export default moduleSlice.reducer;
