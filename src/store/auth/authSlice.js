import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no_authenticated',
        id: null,
        first_name: null,
        email: null,
        token: null,
        fecha: null,
        message_error: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.id = payload.id;
            state.first_name = payload.first_name;
            state.email = payload.email;
            state.token = payload.token;
            state.fecha = payload.fecha;
            state.message_error = payload.message_error;
        },
        logout: (state, { payload }) => {
            state.status = 'no_authenticated';
            state.id = null;
            state.first_name = null;
            state.email = null;
            state.token = null;
            state.fecha = null;
            state.message_error = payload.message_error;
        },
        checking: (state) => {
            state.status = 'checking'
        }
    }
});
export const { login, logout, checking } = authSlice.actions;