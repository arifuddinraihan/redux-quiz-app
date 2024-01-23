import { baseApi } from "../../api/baseApi";

const moduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllModules: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllModulesQuery } = moduleApi;
