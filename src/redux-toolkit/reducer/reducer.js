import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addusers(action,payload){},
       
    }
})
export const {addusers} = usersSlice.actions;
export default usersSlice.reducer;