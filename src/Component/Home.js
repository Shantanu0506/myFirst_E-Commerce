import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

import phone from '../images/pm.jpg';
import phone1 from '../images/am.jpg';
import phone2 from '../images/sm.jpg';
import phone3 from '../images/shiwa-id-Uae7ouMw91A-unsplash.jpg';
import phoneIcon from '../images/mobile_3_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

import watch from '../images/aw.webp';
import watch1 from '../images/sw.webp';
import watch2 from '../images/gw.webp';
import watch3 from '../images/daniel-korpai-QhF3YGsDrYk-unsplash.jpg';
import watchIcon from '../images/watch_check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

import tv from '../images/lt.jpg';
import tv1 from '../images/st.jpg';
import tv2 from '../images/st2.jpg';
import tv3 from '../images/nicolas-j-leclercq-fg00hP0VPI8-unsplash.jpg';
import tvIcon from '../images/tv_gen_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

import machine from '../images/bl.jpg';
import machine1 from '../images/il.jpg';
import machine2 from '../images/pl.jpg';
import machine3 from '../images/raychan-vkpVPcIBU5U-unsplash.jpg';
import machineIcon from '../images/local_laundry_service_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';




function Home() {
    const { theme: firstTheme } = useContext(ThemeContext);
    console.log(firstTheme);
    const navigate = useNavigate();
   const handleExplore = () => {
        navigate('/product');
    };
    

    return (
        <>
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm mt-2 text-center"><h2>This is my Home page!</h2></div>
                <div className="col-sm"></div>
            </div>

            <div className="row">
                <div className="col-sm bg-primary">
                    <div className="mt-2 text-center">
                        <h4>Smart Phone's</h4>
                        <div id="carouselPhone" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item ">
                                    <img src={phone} className="d-block w-220 product-img" alt="phone" />
                                </div>
                                <div className="carousel-item">
                                    <img src={phone1} className="d-block w-220 product-img" alt="phone1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={phone2} className="d-block w-220 product-img" alt="phone2" />
                                </div>
                                <div className="carousel-item active">
                                    <img src={phone3} className="d-block w-220 product-img" alt="phone3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselPhone" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselPhone" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <button className="product-btn" onClick={handleExplore}>Explore<img src={phoneIcon} /></button>
                    </div>
                </div>

                <div className="col-sm bg-success">
                    <div className="mt-2 text-center">
                        <h4>Smart Watch's</h4>
                        <div id="carouselWatch" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={watch} className="d-block w-220 product-img" alt="watch" />
                                </div>
                                <div className="carousel-item">
                                    <img src={watch1} className="d-block w-220 product-img" alt="watch1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={watch2} className="d-block w-220 product-img" alt="watch2" />
                                </div>
                                <div className="carousel-item  active">
                                    <img src={watch3} className="d-block w-220 product-img" alt="watch3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselWatch" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselWatch" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <button className="product-btn" onClick={handleExplore}>Explore<img src={watchIcon} /></button>
                    </div>
                </div>

                <div className="col-sm bg-danger">
                    <div className="mt-2 text-center">
                        <h4>Smart Tv's</h4>
                        <div id="carouselTv" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={tv1} className="d-block w-220 product-img" alt="tv1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={tv} className="d-block w-220 product-img" alt="tv" />
                                </div>
                                <div className="carousel-item">
                                    <img src={tv2} className="d-block w-220 product-img" alt="tv2" />
                                </div>
                                <div className="carousel-item  active">
                                    <img src={tv3} className="d-block w-220 product-img" alt="tv3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTv" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselTv" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <button className="product-btn" onClick={handleExplore}>Explore<img src={tvIcon} /></button>
                    </div>
                </div>

                <div className="col-sm bg-secondary">
                    <div className="mt-2 text-center">
                        <h4>Washing Machine's</h4>
                        <div id="carouselMachine" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={machine} className="d-block w-220 product-img" alt="machine" />
                                </div>
                                <div className="carousel-item">
                                    <img src={machine1} className="d-block w-220 product-img" alt="machine1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={machine2} className="d-block w-220 product-img" alt="machine2" />
                                </div>
                                <div className="carousel-item  active">
                                    <img src={machine3} className="d-block w-220 product-img" alt="machine3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMachine" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselMachine" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <button className="product-btn" onClick={handleExplore}>Explore<img src={machineIcon} /></button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Home;