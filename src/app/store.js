import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

//  Solution for /import useDispatch and useSelector [any libs from react-redux] causes an error "useReduxContext.js:24 Uncaught Error: could not find react-redux context value;.."/ is
//  exporting store as const and updting or wrapping Home page with storage provider in App.js

export const store = configureStore({ 
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});