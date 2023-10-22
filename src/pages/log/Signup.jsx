import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [fdata,setdata]=useState({
        fname:'',
        lname:'',
        email:'',
       password:'',
      });
      const nav=useNavigate();

      const [dis,setdis]=useState("none");
      const handelsub=(e)=>{
        e.preventDefault();
        console.log(fdata);
    };
    const inputeve =(e)=>{
        console.log(e.target.name);
        const {name,value}=e.target;
    
        setdata((prevData)=>(
          {
            ...prevData,[name]:value,
          }
        ))
      };

      const register=()=>{
        setdis("none");
    (fdata.fname && fdata.lname && fdata.email && fdata.password)?
      axios.post("http://localhost:10000/signup",fdata).then(res=> alert(res.request.responseText)).catch(Error=>{
        if(Error) alert("something went wrong");
      }):
       setdis("block");
  }
  return (
    <div className='chr1'>
    <div className="head1">

    <h1>SIGNUP</h1>
   
    </div>
      <div class="container container1">

        <form onSubmit={handelsub} action="" method="get">
         
          <div className="formarea">
          {/* <input name='fname'  onChange={inputeve} type="text" placeholder="First Name" /> */}
          <input name='fname' onChange={inputeve} type="text" placeholder="First Name" />
            <input name='lname'  onChange={inputeve} type="text" placeholder="Last Name" />
          <input name='email'  onChange={inputeve} type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" /><br />
         
          <input name='password'  onChange={inputeve} type="password" placeholder="Password" />
          </div>
          <h5 onClick={()=>{nav('/signin')}}>signin?</h5>
         <div className="btnn">

          <h5 style={{display:dis}} >please fill the form</h5>
          <input  type="submit" onClick={register} value="Submit"  /><br />
         </div>
          

        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>

      </div>
   

  </div>
  )
}
