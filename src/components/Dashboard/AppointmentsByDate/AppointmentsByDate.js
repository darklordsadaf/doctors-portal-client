import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div>
            <h2 className="text-brand text-center mt-3 mb-5">Appointments</h2>
            {
                appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;