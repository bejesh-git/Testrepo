import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { GET, DELETE, PUT, POST } from "../../shared/service/HTTP.service";

const API_URL = "http://localhost:8888/products";

export const fetchData = createAsyncThunk("api/fetchDate" , async ()=>{
    let response = await GET(API_URL);
    return response.data;
});

export const deleteData = createAsyncThunk("api/deleteDate" , async (ID)=>{
    await DELETE(`${API_URL}/${ID}`);
});

export const postData = createAsyncThunk("api/postDate" , async (val)=>{
    let resonse = await POST(API_URL, val);
    return resonse.data;
});

export const putData = createAsyncThunk("api/putDate" , async (val)=>{
    let resonse = await PUT(API_URL, val);
    return resonse.data;
});


const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:'idle', //loading / success / failed
        error : null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status="loading";
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.status="success";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteData.pending, (state)=>{
            state.status="loading";
        })
        .addCase(deleteData.fulfilled, (state, action)=>{
            state.status="success";
            state.data = action.payload;
        })
        .addCase(deleteData.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(postData.pending, (state)=>{
            state.status="loading";
        })
        .addCase(postData.fulfilled, (state, action)=>{
            state.status="success";
            state.data = action.payload;
        })
        .addCase(postData.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(putData.pending, (state)=>{
            state.status="loading";
        })
        .addCase(putData.fulfilled, (state, action)=>{
            state.status="success";
            state.data = action.payload;
        })
        .addCase(putData.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})



export default apiSlice.reducer;