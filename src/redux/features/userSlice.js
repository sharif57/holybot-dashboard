import baseApi from "../app/baseApi";




export const userApi = baseApi.injectEndpoints({
  
  endpoints: (builder) => ({
    // Fetch all users
   
    fetchUsers: builder.query({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["User"], // Provides 'User' tag
    }),

    // Get notifications
    notification: builder.query({
      query: () => ({
        url: "/notification",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Notification"], // Provides 'Notification' tag for notifications
    }),

    // Get login info
    loginInfo: builder.query({
      query: () => ({
        url: "/auth/login",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    // Get admin profile
    adminProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["User"], // Provides 'User' tag
    }),

    // Update user profile
    updateProfile: builder.mutation({
      query: (updateInfo) => ({
        url: "/user/update-profile",
        method: "POST",
        body: updateInfo,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["User"], // Invalidates 'User' tag after mutation
    }),

    feedback: builder.query({
      query: (_id) => ({
        url: `/review/single-review/${_id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["User"], // Provides 'User' tag
    }),

  }),
});

export const {
  useFetchUsersQuery,
  useNotificationQuery,
  useLoginInfoQuery,
  useAdminProfileQuery,
  useUpdateProfileMutation,
  useFeedbackQuery
} = userApi;

