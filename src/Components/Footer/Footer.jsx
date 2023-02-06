import React, { useEffect } from 'react';
import '../Footer/Footer.css'
import video2 from '../../Assets/Wave - 19368.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} muted loop autoPlay type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>STAY IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type="submit">
                            SEND  <FiSend className='icon' />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">

                                <SiYourtraveldottv className='icon' />
                                TRAVEL BUDDY
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur maiores accusamus sapiente temporibus nisi molestiae dolores perferendis harum dignissimos.
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineFacebook className='icon' />
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="footerLinks grid">
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Our Agency
                            </span>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>


                        </div>
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Partners
                            </span>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Sponsors
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Clients
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Members
                            </li>


                        </div>
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Partners
                            </span>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Sponsors
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Clients
                            </li>
                            <li className="footerList">
                                <FiChevronRight className='icon' />
                                Members
                            </li>


                        </div>


                    </div>

                    <div className="footerDiv flex">
                        <small >MAKE YOUR TRAVEL EASY AND COMFORTABLE</small>
                        <small >Copyrights-Marjan@2023</small>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;