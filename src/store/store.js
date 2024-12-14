import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice, authSlice, boardSlice, taskSlice } from './';


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        board: boardSlice.reducer,
        task: taskSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})