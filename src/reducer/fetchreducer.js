import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initState= {
    id:"",
    name:"",
}
const fetred=createSlice(
    {
        name:"fetchinguser",
        initState,
        reducer:{
            login(state,action){
                axios.get("http://localhost:10000/auth",).then(res=> {
                                    state=
                                    {
                                        
                                        id:res.data.id,
                                        name:res.data.name,
                                    }
                                    state.push(action.payload);
                                        
                                        
                                })
            }
        }

    }
);


// const fetred= (state=initState,action) =>{
//     switch(action.type){
//         case "login" : 
//         {

//             axios.get("http://localhost:10000/auth",).then(res=> {
//                 state=
//                 {
                    
//                     id:res.data.id,
//                     name:res.data.name,
//                 }
//                 console.log(state);
//                 return res.data;
                    
                    
//             })
//             console.log(state);
    
//             break;
//         }
       
        
//         default : return state;
//     }
// }
export const {login}=fetred.actions;
export default fetred.reducer;

