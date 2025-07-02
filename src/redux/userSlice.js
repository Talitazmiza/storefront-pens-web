import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    username: null,
    name: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.name = action.payload.name;
        },
        clearUser: (state) => {
            state.id = null;
            state.username = null;
            state.name = '';
        }
    },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
