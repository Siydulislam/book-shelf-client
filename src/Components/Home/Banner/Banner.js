import React from 'react';
import Book1 from '../../../Assets/Images/the-seven-habits-of-highly-effective-people.jpg';
import Book2 from '../../../Assets/Images/the-art-of-war.jpg';
import Book3 from '../../../Assets/Images/the-dicision-book.jpg';
import Book4 from '../../../Assets/Images/the-art-of-thinking-clearly.jpg';
import Book5 from '../../../Assets/Images/emotional-intelligence.jpg';
import Book6 from '../../../Assets/Images/six-thinking-hats.jpg';
import Book7 from '../../../Assets/Images/mans-search-for-meaning.jpg';

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
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
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
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Art of War</h2>
                                <p className="fs-5">The work, which is attributed to the ancient Chinese military strategist Sun Tzu ("Master Sun"), is composed of 13 chapters. Each one is devoted to a different set of skills (or "art") related to warfare and how it applies to military strategy and tactics. For almost 1,500 years it was the lead text in an anthology that was formalized as the Seven Military Classics by Emperor Shenzong of Song in 1080.</p>
                            </div>
                            <img src={Book2} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Decision Book</h2>
                                <p className="fs-5">Every day offers moments of decision, from what to eat for lunch to how to settle a dispute with a colleague. Still larger questions loom: How can I motivate my team? How can I work more efficiently? What is the long tail anyway?</p>
                            </div>
                            <img src={Book3} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">The Art of Thinking Clearly</h2>
                                <p className="fs-5">Have you ever: Invested time in something that, with hindsight, just wasn’t worth it? Or continued doing something you knew was bad for you? These are examples of cognitive biases, simple errors we all make in our day-to-day thinking. But by knowing what they are and how to spot them, we can avoid them and make better decisions.</p>
                            </div>
                            <img src={Book4} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">Emotional Intelligence</h2>
                                <p className="fs-5">Everyone knows that high IQ is no guarantee of success, happiness, or virtue, but until Emotional Intelligence, we could only guess why. Daniel Goleman's brilliant report from the frontiers of psychology and neuroscience offers startling new insight into our “two minds”—the rational and the emotional—and how they together shape our destiny.</p>
                            </div>
                            <img src={Book5} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">Six Thinking Hats</h2>
                                <p className="fs-5">Six Thinking Hats was written by Dr. Edward de Bono. "Six Thinking Hats" and the associated idea parallel thinking provide a means for groups to plan thinking processes in a detailed and cohesive way, and in doing so to think together more effectively</p>
                            </div>
                            <img src={Book6} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container row mx-auto mt-3 align-items-center">
                            <div className="col-lg-6 cl-md-12 text-light">
                                <h2 className="fs-1">Man's Search for Meaning</h2>
                                <p className="fs-5">Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome.</p>
                            </div>
                            <img src={Book7} alt="" className="col-lg-6 col-md-12 mx-auto py-5" style={{ width: '350px' }} />
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