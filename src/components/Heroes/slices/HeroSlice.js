import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const heroAbilityAdapter = createEntityAdapter();

const initialState = heroAbilityAdapter.getInitialState({
    activeAbility: ''
});

const heroAbilitySlice = createSlice({
    name: 'heroAbility',
    initialState,
    reducers: {
        activeAbilityChanged: (state, action) => {
            state.activeAbility = action.payload;
        }
    }
});
const { reducer, actions } = heroAbilitySlice;

export default reducer;

export const { activeAbilityChanged } = actions;

export const selectHeroActiveAbility = state => state.heroAbility.activeAbility;