import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counterSlice"

// export const store = configureStore({
//   reducer: {},
// })


export const store = configureStore({
    reducer: {
        count: counterReducer
    }
})