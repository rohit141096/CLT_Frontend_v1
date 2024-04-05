import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import storage from "redux-persist/lib/storage"

import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

import { thunk } from "redux-thunk"

import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

import userReducer from "./reducers/User"

import App from "./App"
import "./styles/global.scss"
import "./styles/all.min.css"

const reducers = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
)
