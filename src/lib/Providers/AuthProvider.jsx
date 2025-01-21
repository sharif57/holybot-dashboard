import React, { useEffect } from "react";
import ThemeProvider from "./ThemeProvider";
// import { useDispatch } from "react-redux";
// import { useGetUserByTokenQuery } from "../../redux/features/Users/userApi";
// import { setUser } from "../../redux/features/Auth/authSlice";

const AuthProvider = ({ children }) => {
  //   const dispatch = useDispatch();
  //   const { data, isLoading } = useGetUserByTokenQuery();
  //   // console.log({ data, isLoading })
  //   useEffect(() => {
  //     if (!isLoading) {
  //       dispatch(
  //         setUser({
  //           user: data?.data || null,
  //         })
  //       );
  //     }
  //   }, [data, isLoading]);
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AuthProvider;
