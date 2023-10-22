import axios from 'axios';
import React, { useState } from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {login} from '../../reducer/fetchreducer';
import {  useNavigate } from 'react-router-dom';
export const Signin = () => {
  // const userdata=useSelector((state)=> state.fetchinguser);
      const nav=useNavigate();
  // const dispatch=useDispatch();
    const [fdata,setdata]=useState({
        
        email:'',
       password:'',
      });
      const [dis,setdis]=useState("none");
      const handelsub=(e)=>{
        e.preventDefault();
       
    };
    const inputeve =(e)=>{
       
        const {name,value}=e.target;
    
        setdata((prevData)=>(
          {
            ...prevData,[name]:value,
          }
        ))
      };

      const register=()=>{
        setdis("none");
    (fdata.email && fdata.password)?
      axios.post("http://localhost:10000/login",fdata).then(res=> {console.log(res); nav('/')}).catch(Error=>{
        if(Error) console.log(Error);
      }):
       setdis("block");

      // console.log(userdata);

      }
  return (
    <div className='chr1'>
      <div className="head1">

      <h1>SIGNIN</h1>
      
      
      </div>
        <div className="container container1">

          <form onSubmit={handelsub} action="" method="get">
           
            <div className="formarea">
           
            <input name='email'  onChange={inputeve} type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" /><br />
           
            <input name='password'  onChange={inputeve} type="password" placeholder="Password" />
            </div>
             
            <h5 onClick={()=>{nav('/signup')}}>signup?</h5>
           <div className="btnn">

            <h5 style={{display:dis}}>please fill the form</h5>
            <input  type="submit" onClick={register} value="Submit"  /><br />
           </div>
            

          </form>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>

        </div>
     

    </div>
  )
}
