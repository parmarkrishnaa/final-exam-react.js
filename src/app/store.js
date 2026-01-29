import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js"

const store = configureStore({
    reducer:{
        users: userReducer
    }
})

export default store;