import React, { useContext, useEffect, useState } from 'react'
import "./chr.css"
import axios from 'axios'
// import { AuthContext } from '../../context/Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import fetchid from "../../Action/fetch";
import { AuthContext } from '../../context/Authcontext';
export const CHR = () => {
  let [userdata,setuser]=useState();

  const navigate=useNavigate();
  useEffect(() => {
    const unsub=
    axios.get("http://localhost:10000/auth",).then(res=> {setuser(res.data);}).catch(err=>{
       if(err)
       {
          navigate('/signin');
         
       }
    })

   
  }, [])
  
  console.log(userdata);
  
  // const dispatch=useDispatch();
  const [fdata,setdata]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    message:'',
  });
  
  
  
  // const userdata=useContext(AuthContext);
  
  

  const [dis,setdis]=useState("none")
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
  
  
  const register=async()=>{
    setdis("none");
    
    
    
    // (fdata.fname && fdata.lname && fdata.email && fdata.phone)?
      axios.post("http://localhost:10000/contact",{id:userdata.id,info:fdata}).then(res=> alert(res.request.responseText)).catch(Error=>{
        if(Error) alert("something went wrong");
      })
    //    setdis("block");
  }
  return (
    <div className='chr1'>
      <div className="head1">

      <h1>Company Health Report (CHR)</h1>
      <p >Letter of on become he tended active enable to.<br/>Vicinity relation sensible sociable surprise screened no up as.</p>
      
      </div>
        <div className="container container1">

          <form onSubmit={handelsub} action="" method="get">
           
            <div className="formarea">
            <input name='fname'  onChange={inputeve} type="text" placeholder="First Name" />
            <input name='lname'  onChange={inputeve} type="text" placeholder="Last Name" />
            <input name='email'  onChange={inputeve} type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" />
            <input name='phone'  onChange={inputeve}  type="text" pattern="[6-9]{1}[0-9]{9}" placeholder="Contact Number*" />
            <input name='message'  onChange={inputeve} type="text" placeholder="type a message" />
            </div>
            
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
