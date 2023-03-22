import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 'test text'
}

export const testSlice = createSlice({
    name: 'testF',
    initialState: initialState,
    reducers: {
        changeTheContent: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const changeTheContent = testSlice.actions.changeTheContent;
export default testSlice.reducer;