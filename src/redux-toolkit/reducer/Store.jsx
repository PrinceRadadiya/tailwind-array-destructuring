import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer"

const store = configureStore({
    reducer: {
        nameof: userSlice,
    },
})

export default store