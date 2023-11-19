import React from "react";

function Addiv(props) {
    return(
        <div>
            <div className="addiv">
                    <div className="adbox">
                        <div>
                            <img className="adimg" src={props.url}/>
                        </div>
                        <div className="aboutad">
                            <h4 className="adh4">{props.name}<br></br> 다이어트</h4>
                            <h5 className="adh6">{props.cost}원~</h5>
                        </div>
                    </div>
                </div>

        </div>
    ); 
}

export default Addiv;