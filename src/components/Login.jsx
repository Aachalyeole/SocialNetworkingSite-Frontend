import React from "react";
import './Style.css'

const Login=()=>{
    return(
        <div className="container login-styling">
           <form>
            <div className="row">
                <div className="col-sm-4 login-styling" >
                    <label>UserName</label>
                    <input />

                </div>
                <div className="col-sm-4 login-styling">
                    <label>Password</label>
                    <input />

                </div>
                <div className="col-sm-4">
                    <br></br>
                    <button>Login</button>

                </div>
            </div>
           </form>
        </div>
    )
}
export default Login