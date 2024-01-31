import React from "react";
import {useNavigate} from 'react-router-dom';
const About=()=>{
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/labs");
    }
    return (<div>
        <div>
            this is about page
        </div>
        <button onClick={clickHandler}>
            move to 
        </button>
        </div>
    )

}
export default About