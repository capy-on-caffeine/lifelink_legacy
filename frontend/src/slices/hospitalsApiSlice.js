import { apiSlice } from "./apiSlice";

const HOSPITALS_URL = "/api/hospital";

export const hospitalsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${HOSPITALS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${HOSPITALS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${HOSPITALS_URL}/logout`,
        method: "POST",
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${HOSPITALS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateMutation,
} = hospitalsApiSlice;
