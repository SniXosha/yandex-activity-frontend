import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        activityLevel: 0,
        money: 0,
    },
    reducers: {
        setActivityLevel: (state, action) => {
            state.activityLevel = action.payload
        },
        setMoney: (state, action) => {
            state.money = action.payload
        },
    },
})

export const { setActivityLevel, setMoney } = filterSlice.actions

export default filterSlice.reducer