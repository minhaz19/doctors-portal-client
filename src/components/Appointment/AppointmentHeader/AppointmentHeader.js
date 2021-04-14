import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handelDateChange}) => {
    return (
        <main style={{ height: "500px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "rgba(58,66,86,255)" }}>Appointment</h1>
                <div>
                    <Calendar
                        onChange={handelDateChange}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;