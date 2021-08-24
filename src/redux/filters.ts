import { createSlice } from '@reduxjs/toolkit'
import {ALL} from "data/activities";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        activityLevel: 0,
        money: 10000,
        category: ALL,
    },
    reducers: {
        setActivityLevel: (state, action) => {
            state.activityLevel = action.payload
        },
        setMoney: (state, action) => {
            state.money = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
    },
})

export const { setActivityLevel, setMoney, setCategory } = filterSlice.actions

export default filterSlice.reducer