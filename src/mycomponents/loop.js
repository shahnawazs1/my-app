import React from "react";
import Myheader from "./header";

var Allss=[{name: "Tom"}, {name:" Steve"} , {name:"Rock"} ]

const Loop = () =>{
    return(
      <>
        {Allss.map( eachStudents =>(<Myheader name={eachStudents.name} />)
        )
    }
    </>
    
    
    )
}

export default Loop;