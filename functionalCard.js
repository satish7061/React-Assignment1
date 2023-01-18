import React from "react";

export default function
FunctionalCard({data}){
    return(
        <div className="card card1">
            <h1>This is created using {data}Component</h1>
            <p className="card-para">This is done using external CSS</p>
            <p style={{color:"blue",fontfamily:"cursive",fontsize:"large"}}>This is done using internal CSS</p>
        </div>
    )
}