import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const searchAdapter = createEntityAdapter();

const initialState = searchAdapter.getInitialState({
    searchString: ''
});

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchStringChanged: (state, action) => {
            state.searchString = action.payload;
        }
    }
});

const { reducer, actions } = searchSlice;

export default reducer;

export const { searchStringChanged } = actions;

export const selectSearchString = state => state.search.searchString;