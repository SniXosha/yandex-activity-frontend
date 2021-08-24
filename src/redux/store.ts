import { configureStore } from '@reduxjs/toolkit'
import filterReducer from 'redux/filters'

export default configureStore({
    reducer: {
        filter: filterReducer
    },
})