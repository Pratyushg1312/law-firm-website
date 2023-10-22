import axios from 'axios';
import React from 'react'

import { createContext, useEffect, useState } from "react";


export const AuthContext= createContext();
export const AuthcontextProvider = ({children})=>{
    
    const [currentUser,setCurrentUser]=useState({id:'',name:''})  ;
    useEffect(() => {
        const unsub=
         axios.get("http://localhost:10000/auth",).then(res=> {setCurrentUser(res.data);}).catch(err=>{
            if(err)
            {
                setCurrentUser("error");
                console.log(err);
              
            }
         })
         
         
         
         return ()=>{
              unsub();
            }

        }, []);

        
        return(<AuthContext.Provider value={currentUser}>
              {children}
            </AuthContext.Provider>);
        
        
    }