
import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"


import "./popmore.css"

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
    right: "16px"}} htmlFor="closebtn"><AiFillCloseCircle style={{color:'#FA2742'
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