import { createSlice } from "@reduxjs/toolkit";

type TQuiz = {
  module: string;
  question: string;
  description: string;
  options: string[];
  correctOption: string;
};

type TQuizInitialState = {
  quiz: TQuiz[];
};

type TQuizAction = {
  payload: TQuiz;
};

const initialState: TQuizInitialState = {
  quiz: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action: TQuizAction) => {
      state.quiz.push(action.payload);
    },
  },
});

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;
