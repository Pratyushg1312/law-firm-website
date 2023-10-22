import {legacy_createStore as createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import fetred from "./reducer/fetchreducer";

// const store=createStore(rootreducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store= configureStore(
    
   {reducer:{
      //   fetching:fetred,
   }}
   
    
)

export default store;


