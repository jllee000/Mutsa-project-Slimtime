import React from "react";

function Progressbar(props) {
    const size = props.num * 15
    return(
        <div>
            <div className="backbar">
                <div className="frontbar" style={{ width : `${size}vw` }}>
                    
                </div>
            </div>
            <div>
                <h3 className="progresstxt">{props.num}/ 4 </h3>
            </div>
        </div>
    );
}

export default Progressbar;