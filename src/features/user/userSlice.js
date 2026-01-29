import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const addStudent = createAsyncThunk("users/addStudent", async(user,rejectWithValue) => {
    try {
        let res = await apiInstance.post("/users", user);
        console.log(res.data)
        return res.data; 
    } catch (error) {
        alert(rejectWithValue(error.message));
    }
})

export const deleteStudent = createAsyncThunk("users/deleteStudent", async(id,rejectWithValue) => {
    try {
        let res = await apiInstance.delete("/users/${id}");
        console.log(res.id)
        return id;
    } catch (error) {
        alert(rejectWithValue(error.message));
    }
})

export const updateStudent = createAsyncThunk("users/updateStudent", async(id,rejectWithValue) => {
    try {
        let res = await apiInstance.put("/users/${id}");
        console.log(res.id)
        return res.id; 
    } catch (error) {
        alert(rejectWithValue(error.message));
    }
})

export const getStudent = createAsyncThunk("users/getStudent", async(_,rejectWithValue) => {
    try {
        let res = await apiInstance.get("/users");
        console.log(res.data)
        return res.data; 
    } catch (error) {
        alert(rejectWithValue(error.message));
    }
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state
        })
    }
})

export default userSlice.reducer;