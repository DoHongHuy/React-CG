import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
function Main(){
    return (
        <div className="container d-flex align-items-center">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

export default Main;