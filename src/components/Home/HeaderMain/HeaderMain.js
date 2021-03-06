import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: "500px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"rgba(58,66,86,255)"}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Rerum expedita aut <br/> sequi aliquid perferendis est?</p>
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;