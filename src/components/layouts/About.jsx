import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function About() {
    let navigate = useNavigate();
    // let { id } = useParams();
    return (
        <div>
            About<br></br>
            <Link to="/contact">About {/*id*/} </Link><br></br>
            <button onClick={() => { navigate("/contact") }}>Contact</button>
        </div>
    )
}
