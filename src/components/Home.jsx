import React from "react";
import './Style.css';
import Login from './Login';
import Signup from './Signup';
import snsImage from './sns.png';
import sn3Image from './sn3.png';

const Home=()=>{

    return (
        <div className='main'>
          <div className='navbar'>
            <div className='logo'>
              <img className='image1' src={snsImage} alt='logo'/>
            </div>
            <div className='login'>
              <Login/>
            </div>
          </div>
          <div className='box container-fluid'>
           <div className='row'>
             <div className='box1 col-sm-6'>
                <img className='image2' src={sn3Image} alt='image'/>
              </div>
             <div className='box2 col-sm-6'>
               <Signup/>
             </div>
           </div>
          </div>
        </div>
      );
}
export default Home;