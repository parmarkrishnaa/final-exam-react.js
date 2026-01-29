import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

/* ADD STUDENT */
export const addStudent = createAsyncThunk(
    "users/addStudent",
    async (user, { rejectWithValue }) => {
        try {
            const res = await apiInstance.post("/users", user);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/* DELETE STUDENT */
export const deleteStudent = createAsyncThunk(
    "users/deleteStudent",
    async (id, { rejectWithValue }) => {
        try {
            await apiInstance.delete(`/users/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/* UPDATE STUDENT */
export const updateStudent = createAsyncThunk(
    "users/updateStudent",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const res = await apiInstance.put(`/users/${id}`, data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/* GET STUDENTS */
export const getStudent = createAsyncThunk(
    "users/getStudent",
    async (_, { rejectWithValue }) => {
        try {
            const res = await apiInstance.get("/users");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        students: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            /* ADD */
            .addCase(addStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload);
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* DELETE */
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.students = state.students.filter(
                    (student) => student.id !== action.payload
                );
            })

            /* UPDATE */
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.students = state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                );
            })

            /* GET */
            .addCase(getStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(getStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(getStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;