// Redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { courseApi } from "./api/courseApi";
import { userAPI } from "./api/userApi";
import { authAPI } from "./api/authApi";
import auth from "./slices/auth";
import { stripeApi } from "./api/stripeApi";
import { classScheduleApi } from "./api/classScheduleApi";
import { enquiriesApi } from "./api/enquiriesApi";
import { resultsApi } from "./api/resultsApi";
import { notificationApi } from "./api/notificationApi";

export const store = configureStore({
  reducer: {
    auth,
    [courseApi.reducerPath]: courseApi.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
    [classScheduleApi.reducerPath]: classScheduleApi.reducer,
    [enquiriesApi.reducerPath]: enquiriesApi.reducer,
    [resultsApi.reducerPath]: resultsApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(courseApi.middleware)
      .concat(userAPI.middleware)
      .concat(authAPI.middleware)
      .concat(stripeApi.middleware)
      .concat(classScheduleApi.middleware)
      .concat(enquiriesApi.middleware)
      .concat(resultsApi.middleware)
      .concat(notificationApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
