import { useRef } from "react";
import React from "react";

function Count(){
    const count =useRef(0);
    console.log(count);
    return(
        <>
        <h3>Welcome to Count</h3>
        <p>It is without react.memo() function!</p>
        <span>render count {count.current++}</span>
        </>
    );
}
export default React.memo(Count);