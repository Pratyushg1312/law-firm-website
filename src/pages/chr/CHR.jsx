import React from 'react'
import "./chr.css"
export const CHR = () => {
  return (
    <div className='chr1'>
      <div className="head1">

      <h1>Company Health Report (CHR)</h1>
      <p >Letter of on become he tended active enable to.<br/>Vicinity relation sensible sociable surprise screened no up as.</p>
      
      </div>
        <div class="container container1">

          <form  action="" method="get">
           
            <div className="formarea">
            <input type="text" placeholder="First Name*" /><br />
            <input type="text" placeholder="Last Name*" /><br />
            <input type="email" placeholder="Email" /><br />
            <input type="number" placeholder="Contact Number*" /><br />
            <input type="text" placeholder="Company Name*" /><br />
            <input type="number" placeholder="Contact Number*" /><br />
            <input type="text" placeholder="Company Name*" /><br />
            </div>
            
           <div className="btnn">

            <input  type="button" value="Sign in" /><br />
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
