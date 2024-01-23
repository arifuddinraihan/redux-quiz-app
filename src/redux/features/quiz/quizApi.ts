import { baseApi } from "../../api/baseApi";

const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizzes: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllQuizzesQuery } = quizApi;
