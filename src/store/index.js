import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter += action.payload;
        },
        decrementBy5(state, action) {
            state.counter -= action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;


