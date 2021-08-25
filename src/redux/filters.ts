import { createSlice } from '@reduxjs/toolkit'
import {ALL} from "data/activities";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        activityLevel: 0,
        money: 5000,
        category: ALL,
        binary: {
            solo: false,
            company: false,
            noEquipment: false,
            indoor: false,
            outdoor: false,
        }
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
        setBinary: (state, action) => {
            // @ts-ignore
            state.binary[action.payload] = !state.binary[action.payload]
        }
    },
})

export const { setActivityLevel, setMoney, setCategory, setBinary } = filterSlice.actions

export default filterSlice.reducer