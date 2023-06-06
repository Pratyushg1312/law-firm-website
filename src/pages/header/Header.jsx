import React from 'react'
import { NavLink,  useNavigate} from 'react-router-dom'
import './header.css'

export const Header = () => {
      
  return (
   <div className="header">
    <div className="logo">
     
        <img id='lognav' src="./image/logogc.png" alt="Gupta Corporation"  />
     
    </div>
    <div className="navi">
    <ul>
    <li>
        <NavLink to="/">Prolounge</NavLink>
        </li>
      
       <li>
        <NavLink to="offerings">Offerings</NavLink>
        </li>
       <li>
        <NavLink to="/leadership">Leadership</NavLink>
        </li>
       {/* <li>
        <NavLink to="/careers">Careers</NavLink>
        </li> */}
       <li>
        <NavLink  to="/chr"
         style={({ isActive }) => ({
          height: isActive ? "50px" : "50px",
        })}
        ><button  className='chr' >CHR</button></NavLink>
        
        
        </li>

      </ul>
    </div>
   </div>
  )
}
