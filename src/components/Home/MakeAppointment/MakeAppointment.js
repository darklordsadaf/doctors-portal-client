import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5>APPOINTMENT</h5>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p className="my-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad!</p>
                        <button style={{ background: '#1CC7C1' }} className="btn text-white"><b>Learn More</b></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;