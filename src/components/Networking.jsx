import React, { useState } from "react";
import './Style.css';
import Search from "./Search";
import fdImage from './fd.png';
import mgImage from './mg.png';

const Networking =()=>{
     
    const [count, setCount] = useState(0);

    return(
       <div className="base">
         <div className="container ">
            <div className="row navbar1">
                <div className="col-sm-3">
                    Welcome 
                </div>
                <div className="col-sm-4">
                    <Search/>
                </div>
                <div className="col-sm-5 operation">
                    <img src={fdImage} alt="icon" />
                    {count}
                    <img src={mgImage} alt="icon" />
                    {count}
                    <a href="/">Logout</a>
                </div>
            </div>

        </div>
       </div>
    )

}
export default Networking;