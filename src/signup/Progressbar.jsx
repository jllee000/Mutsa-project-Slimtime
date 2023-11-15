import React from "react";

function Progressbar(props) {
    const size = props.num * 250
    return(
        <div>
            <div className="backbar">
                <div className="frontbar" style={{ width : size }}>
                    
                </div>
            </div>
            <div>
                <h3 className="progresstxt">{props.num}/ 3 </h3>
            </div>
        </div>
    );
}

export default Progressbar;