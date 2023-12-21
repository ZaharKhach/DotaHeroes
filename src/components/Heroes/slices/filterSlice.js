import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    attributes: ['int', 'str', 'agi', 'uni'],
    activeFilter: "none"
});


const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            console.log(action.payload, 'payload')
            if (action.payload === state.activeFilter) {
                state.activeFilter = 'none';
                return
            }
            state.activeFilter = action.payload;
        }
    }
});
const { reducer, actions } = filtersSlice;

export default reducer;

export const {
    filtersChanged,
} = actions;

export const selectFilters = state => state.filters.attributes
export const selectActiveFilter = state => state.filters.activeFilter;