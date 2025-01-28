import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://212f-115-127-156-9.ngrok-free.app/api/v1" }),
  tagTypes: ["User", "Notification", "AboutUs", "Privacy", "terms"], // Added all necessary tags
  endpoints: () => ({}), // Empty object for the base API setup
});

export default baseApi;

