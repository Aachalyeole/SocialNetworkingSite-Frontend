import React from "react";
import './Style.css';
// import { useNavigate } from "react-router-dom";

const Signup=()=>{

    // const navigate = useNavigate();

    // const handleSubmit = ()=>{
    //     navigate('/networking');
    // }

    return(
        <div className="container try">
            <br/>
            <h1 id="heading">Create New Account - Free!!</h1><br/>
            <form >
            <div className="row">
               <div className="col-md-6 form-group">
               <input type="text"  placeholder="First Name"/>
               </div>
               <div className="col-md-6 form-group">
               <input type="text"  placeholder="Last Name"/>
               </div>
            </div>

           <div className="form-group">
              <input type="email"  placeholder="Email"/>
           </div>

           <div className="row">
             <div className=" col-md-6 form-group">
                 <input type="tel"  placeholder="Mobile"/><br/>
              </div>

           <div className="   col-md-6 form-group">
             <label className="birthday">Birth Date:</label><br/><br/>
             <input type="number"  min="1" max="31" placeholder="Day" />
  
             <select placeholder="Month">
                 <option value="">Select Month</option>
                 <option value="Jan">January</option>
                 <option value="Feb">February</option>
                 <option value="Mar">March</option>
                 <option value="Apr">April</option>
                 <option value="May">May</option>
                 <option value="Jun">June</option>
                 <option value="Jul">July</option>
                 <option value="Aug">August</option>
                 <option value="Sep">September</option>
                 <option value="Oct">October</option>
                 <option value="Nov">November</option>
                  <option value="Dec">December</option>
             </select>
             <input type="number"  min="1900" max="2024" placeholder="Year" />
          </div>
           </div>

          <div className="form-group">
             <input type="text"  placeholder="City"/>
             <br/><br/>
          </div>

           <div className="form-group">
               <input type="text"  placeholder="User Name"/>
           </div>

           <div className="form-group">
             <input type="password"  placeholder="Password"/>
           </div>

          <div className="row">
          <div className=" col-md-6 form-group">
              <input type="password"  placeholder="Confirm Password"/>
           </div>
            <div className="col-md-6">
            <button type="submit" >Register Now!</button>
            </div>
          </div>
            </form>
        </div>
        
    )
}
export default Signup;