import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}><b>Your New Smile <br />Starts Here</b></h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, velit dolor culpa quo atque.</p>
                <Link to="/appointment" style={{ background: '#1CC7C1', padding: '10px' }} className="btn text-white"><b>GET APPOINTMENT</b></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;