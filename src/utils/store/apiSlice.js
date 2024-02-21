import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.swiggy.com",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () =>
        "/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    }),
  }),
});

export const { useGetRestaurantsQuery } = apiSlice;
