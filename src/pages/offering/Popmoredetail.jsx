
import React, { useContext, useEffect } from 'react'
import {AiFillCloseCircle} from "react-icons/ai"


import "./popmore.css"



import { useState } from 'react'
const Popmoredetail = (props) => {









    return (props.trigger) ?
        (

            <div key={props.popid} className="popmoredetail" onClick={() => props.setTrigger(false)} >
                <div className="innnerrr">
                    <button style={{display:'none'}}  className="closebtn" id='closebtn' onClick={() => props.setTrigger(false)} >
                        close
                    </button>
                    <label style={{position:"absolute",
    top: "16px",
    right: "16px"}} htmlFor="closebtn"><AiFillCloseCircle style={{color:'white'
    }} /></label>

                    <div className="bodyyy">
                        <h2>
                       {props.poph}
                        </h2>
                        <ul>
                                {props.detail.map(j=>(
                                    <li>
                                  <p>{j}</p>
                                </li>
                                ))}
                        </ul>
                    </div>


                </div>

                

            </div>
        

   
    
  ): "";
}

export default Popmoredetail