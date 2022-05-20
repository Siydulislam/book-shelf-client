import React from 'react';
import Book1 from '../../../Assets/Images/the-seven-habits-of-highly-effective-people.jpg';
import Book2 from '../../../Assets/Images/the-art-of-war.jpg';
import Book3 from '../../../Assets/Images/the-dicision-book.jpg';
import Book4 from '../../../Assets/Images/the-art-of-thinking-clearly.jpg';
import Book5 from '../../../Assets/Images/emotional-intelligence.jpg';

const Banner = () => {
    return (
        <div className="bg-info">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Seven Habits of Highly Effective People</h2>
                                <p className="fs-5">First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                            </div>
                            <img src={Book1} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Seven Habits of Highly Effective People</h2>
                                <p className="fs-5">First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                            </div>
                            <img src={Book2} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Seven Habits of Highly Effective People</h2>
                                <p className="fs-5">First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                            </div>
                            <img src={Book3} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Seven Habits of Highly Effective People</h2>
                                <p className="fs-5">First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                            </div>
                            <img src={Book4} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Seven Habits of Highly Effective People</h2>
                                <p className="fs-5">First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                            </div>
                            <img src={Book5} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;