import { configureStore } from "@reduxjs/toolkit";
// import appConfigReducer from '../slices/appConfigReducer';
import appConfigReducer from './slices/appConfigSlice.js'
import postsReducer from './slices/postsSlice.js'




export default configureStore({
  reducer: {
    appConfig: appConfigReducer, 
    postsReducer 
  },
});
