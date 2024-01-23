import { createSlice } from "@reduxjs/toolkit";

type TStepperState = {
  activeStep: number;
};

const initialState: TStepperState = {
  activeStep: 0,
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = stepperSlice.actions;

export default stepperSlice.reducer;
