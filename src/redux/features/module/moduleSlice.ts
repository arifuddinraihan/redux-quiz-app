import { createSlice } from "@reduxjs/toolkit";

type TModule = {
  moduleTitle: string;
  moduleId: string;
};

const initialState: TModule = {
  moduleTitle: "",
  moduleId: "",
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setSelectModule: (state, action) => {
      state.moduleTitle = action.payload.moduleTitle;
      state.moduleId = action.payload.moduleId;
    },
  },
});

export const { setSelectModule } = moduleSlice.actions;

export default moduleSlice.reducer;
