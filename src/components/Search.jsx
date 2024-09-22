import React from "react";
import sechImage from './sech.png';

const Search =()=>{

    return(
        <div>
           <form className="search">
           <img src={sechImage} alt=" search" />
            <input type="text" placeholder="search"/>
            <button type="submit">Search</button>
           </form>
        </div>
    )

}
export default Search;