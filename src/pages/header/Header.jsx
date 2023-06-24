import React, { useState, useRef, } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'

export const Header = () => {

  const [checked, setChecked] = useState();
  const [widdth, setwidth] = useState("108px");
  const [lefft, setleft] = useState("20px");
  const chkbox = useRef();
  const pro = useRef();
  const off = useRef();
  const lead = useRef();
  const con = useRef();


  // useEffect(() => {


  //   console.log(window.scrollY);

  //   return () => {

  //   }
  // }, [window.onpointermove])

  function indicator(e) {

      
        
        setleft(e.current.offsetLeft + "px");
        setwidth(e.current.offsetWidth + "px");
      


    scrol(e.current.id);

  }
  function scrol(el) {

    if (el === 'prolouge') {
      window.scrollTo({
        top: 80,

        behavior: "smooth",
      });
    }

    if (el === 'offering') {
      window.scrollTo({
        top: 750,

        behavior: "smooth",
      });
    }
    if (el === 'leadership') {
      window.scrollTo({
        top: 1980,

        behavior: "smooth",
      });
    }
  }















  // const act=useRef();
  // console.log(act);










  return (
    <>

      <div className="headerextend">
         

        <img id='lognav' src="./image/logoonly.png" alt="Gupta Corporation" />

      </div>
      <input ref={chkbox}

        checked={checked} type="checkbox" id="nav-tog" />
      <label for="nav-tog" class="nav-tog-lab" onClick={() => { setChecked(!checked) }}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <div className="header">
        <div className="logo" >
          
          {  (window.innerWidth <= 787)? <img id='lognav' src="./image/logogcp.png" alt="Gupta Corporation" />:<img id='lognav' src="./image/logoonly.png" alt="Gupta Corporation" />
}
          

        </div>
        <nav>
          <div class="marker" style={{ width: widdth, left: lefft }}></div>
          <ul>

            <li>
              <NavLink ref={pro} id='prolouge' to="" on sc onClick={(window.innerWidth >= 640) ? () => { indicator(pro) } : () => { setChecked(!checked) }}>Prolounge</NavLink >
            </li>

            <li>
              <NavLink ref={off} id='offering' to="" onClick={() => { setChecked(!checked); indicator(off) }}>Offering</NavLink>
            </li>
            <li>
              <NavLink ref={lead} id='leadership' to="" onClick={() => { setChecked(!checked); indicator(lead) }}>Leadership</NavLink>
            </li>

            <li>
              <NavLink ref={con} className='chhr' to="/chr" onClick={() => { setChecked(!checked); indicator(con) }}
                style={({ isActive }) => ({
                  border: isActive ? "none" : "none",
                })}
              ><button className='chr' >Contact Us</button></NavLink>


            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}


/*

 <input ref={chkbox}
       
        checked={checked} type="checkbox" id="nav-tog" />
      <label for="nav-tog" class="nav-tog-lab" onClick={()=>{setChecked(!checked)}}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <div className="header" >
        <div className="logo" onClick={useNavigate("/")}>

          <img id='lognav' src="./image/logogc.png" alt="Gupta Corporation" />

        </div>
        <div className="navi">
          <ul>
            
            <li>
              <NavLink to="" onClick={(window.innerWidth >=640)?()=>{}:()=>{setChecked(!checked)}}>Prolounge</NavLink >
            </li>

            <li>
              <NavLink to="" onClick={()=>{setChecked(!checked)}}>Offerings</NavLink>
            </li>
            <li>
              <NavLink to="" onClick={()=>{setChecked(!checked)}}>Leadership</NavLink>
            </li>
            <li>
        <NavLink to="/careers">Careers</NavLink>
        </li> 
        <li>
        <NavLink to="/chr"  onClick={()=>{setChecked(!checked)}}
          style={({ isActive }) => ({
            border: isActive ? "none" : "none",
          })}
        ><button className='chr' >Contact Us</button></NavLink>


      </li>

    </ul>
  </div>
</div>


*/
























/*
.logo {
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

}

.logo img {
  width: 30%;
}

.navi {
  display: flex;
  width: 70%;
  padding-right: 40px;

}

.header ul {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
}

.header li {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

li a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 3px;
}
li a:hover{
  border-bottom: 3px solid white;
  transition: all 5s ease-in-out;
}



.chr {
  width: 100px;
  height: 50PX;
  font-weight: bold;
  background-color: black;
  border: 2px solid white;
  color: white;
}

.chr:hover {
  background-color: white;
  border: 2px solid white;
  color: black;
}

#nav-tog {
  display: none;
}

@media (max-width:640px) {
  .line {
    margin-bottom: 6px;
    
    background-image: linear-gradient(90deg, #be00c1, #0dc8ee);
  }

  input:checked~.header {
    display: flex;
  }

  input:checked+.nav-tog-lab>.line {
    background-color: rgb(223, 40, 40);
    background-image: none;
  }

  input:checked+.nav-tog-lab {
    position: fixed;
  }

  .nav-tog-lab {
    position: absolute;
    display: block;
    z-index: 4;
    padding: 16px;
  }

  .nav-tog-lab span {
    margin-top: 3%;
    display: block;
    position: relative;
    height: 0.4em;
    width: 2.5em;
    border-radius: 3px;
  }

  .header {
    display: none;
    flex-direction: row;
    width: 70%;
    position: fixed;
    flex-direction: column;
    font-style: normal;
    font-weight: bold;
    height: 100%;
    z-index: 3;

  }

  .navi ul {
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    justify-content: space-between;


  }

  .navi li {
    
    justify-content: space-evenly;
  }

  .navi {
    width: 90%;
    height: 80%;
    padding: 0;
    align-items: center;
    
  }

  .logo {
    display: none
  }



}
*/