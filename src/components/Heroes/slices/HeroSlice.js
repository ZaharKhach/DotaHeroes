import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const heroAbilityAdapter = createEntityAdapter();

const initialState = heroAbilityAdapter.getInitialState({
    activeAbility: '',
    videoError: false
});

const heroAbilitySlice = createSlice({
    name: 'heroAbility',
    initialState,
    reducers: {
        activeAbilityChanged: (state, action) => {
            state.activeAbility = action.payload;
            state.videoError = false;
        },
        videoIsOnError: (state) => {
            state.videoError = true
        }
    }
});
const { reducer, actions } = heroAbilitySlice;

export default reducer;

export const { activeAbilityChanged, videoIsOnError } = actions;

export const selectHeroActiveAbility = state => state.heroAbility.activeAbility;
export const selectVideoError = state => state.heroAbility.videoError;