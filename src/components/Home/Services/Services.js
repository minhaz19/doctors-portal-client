import React from 'react';
import fluoride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3a4256' }}>Service We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;