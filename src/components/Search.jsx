import React, { useState } from "react"

export default function Search(props){

    let [searchValue, setsearchValue] = useState("")
   
    

    return(
        <div className="search">
          <input type="text" className="myInput" value={searchValue} onChange={(e) => setsearchValue(e.target.value)} placeholder="find your receipt..."/>
          <button className="button" on onClick={() => props.searchFunction(searchValue)}>Click me</button>
        </div>
        


    )
};











