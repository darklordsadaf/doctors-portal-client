import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{ color: '#42495C' }}>Exceptional Dental <br /> Care, on Yor Terms</h1>
                        <p className="text-secondary mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam repellat corrupti consequatur laudantium ex possimus mollitia eveniet, fuga qui est magnam. Odit excepturi commodi earum error fugit, iste ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam, magnam sed recusandae reprehenderit quaerat molestias dolorum minus autem praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam error ut ullam, beatae esse magnam saepe mollitia quasi architecto.</p>

                        <button style={{ background: '#1CC7C1' }} className="btn text-white"> <b>Learn More</b></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;