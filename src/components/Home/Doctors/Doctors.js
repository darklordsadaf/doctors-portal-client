import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{ color: '#1CC7C1' }} className="text-center mb-5"><b>Our Doctors</b></h5>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section>
    );
};

export default Doctors;