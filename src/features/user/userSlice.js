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
            state.users.push(action.payload);
        })

        builder.addCase(addStudent.rejected, (state, action) => {
            state.error = action.payload;
        })

        builder.addCase(addStudent.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(deleteStudent.fulfilled, (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        })

        builder.addCase(deleteStudent.rejected, (state, action) => {
            state.error = action.payload;
        })

        builder.addCase(deleteStudent.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(updateStudent.fulfilled, (state, action) => {
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
        })

        builder.addCase(updateStudent.rejected, (state, action) => {
            state.error = action.payload;
        })

        builder.addCase(updateStudent.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getStudent.fulfilled, (state, action) => {
            state.users = action.payload;
        })

        builder.addCase(getStudent.rejected, (state, action) => {
            state.error = action.payload;
        })

        builder.addCase(getStudent.pending, (state) => {
            state.loading = true;
        })
    }
})

export default userSlice.reducer;