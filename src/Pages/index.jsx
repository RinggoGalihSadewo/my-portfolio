import React, { Component } from "react";
import './index.css';
import sideBars from "./sideBar";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faSoundcloud, faWeebly, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import logo from '../Assets/logo.png';
import ilus1 from '../Assets/hero.png';
import bars from '../Assets/bars-solid.svg';
import waveTop from '../Assets/waveTop.svg';
import github from '../Assets/github.png';
import ringgo from '../Assets/Ringgo Galih Sadewo_118140076_Teknologi Industri_Teknik Informatika - Copy.JPG';
import ilus2 from '../Assets/undraw_hello_re_3evm.svg';
import ktg from '../Assets/ktg.png';
import rusiben from '../Assets/rusiben.png';
import somebil from '../Assets/somebil.png';
import cukurgeh from '../Assets/cukurgeh.png';
import sammal from '../Assets/sammal.png';
import trayek from '../Assets/trayek.png';
import soundcloud from '../Assets/soundcloud.png';
import ilus3 from '../Assets/undraw_percentages_re_a1ao.svg';
import ilus4 from '../Assets/undraw_profile_re_4a55.svg';
import logo2 from '../Assets/logo2.png';

class Index extends Component{
    render(){
        return(
            <div className="container">

                {/* Banner Hero */}

                <div className="bannerHero">

                {/* Navbar */}
                <nav>
                    <div className="logo">
                        <ul>
                            <li>
                                <a href="/">
                                    <img src={logo} alt="" width="50px" height="50px"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="link">
                        <ul>
                            <div className="menu">
                                <li>
                                    <a href="#profile">Profile</a>
                                </li>
                                <li>
                                    <a href="#my-project">My Project</a>
                                </li>
                                <li>
                                    <a href="#skills">My Skills</a>
                                </li>
                            </div>
                            <div className="bars">
                                <button onClick={<sideBars/>}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                        </ul>
                        {/* <div className="iconNav">
                                <img src={bars} alt="" />
                        </div> */}
                    </div>
                </nav>
                {/* End Navbar */}

                {/* Banner */}
                <section id="banner">
                    <div className="col-1" data-aos="fade-right">
                        <h1>Hello, I'm 
                            <Typewriter 
                                words={[' Ringgo Galih Sadewo']}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                            />
                        </h1>
                        <p>
                            I'm an expert in the field of web apps, mobile apps, music composers.
                        </p>
                        <p>
                            The technologies I usually use are Laravel, Bootstap, React js, React Native, JavaScript, MySQL, HTML5, CSS3, PHP and many more. This website my portfolio was built with React Js.
                        </p>
                        <div className="btnHero">
                            <a href="#profile">
                                <button className="btn">VIEW PROFILE</button>
                            </a>
                            <a href="https://github.com/RinggoGalihSadewo" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://github.com/RinggoGalihSadewo" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://soundcloud.com/zailon" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faSoundcloud} />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=+6283177117265&text=Halo, saya%20adalah%20pengunjung%20website%20portfolio%20kamu" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>      
                        </div>    
                    </div>
                    <div className="col-2" data-aos="fade-left">
                        <img src={ilus1} alt="" />
                    </div>
                </section>
                {/* End Banner */}

                </div>

                {/* End Banner Hero */}

                {/* Profile */}
                <section id="profile">
                    <h1 data-aos="fade">- PROFILE -</h1>
                    <div className="profile">
                        {/* <div className="col-1" data-aos="fade-right">
                            <img src={ringgo} alt="" />
                        </div> */}
                        <div className="col-1" data-aos="fade-right">
                            <img src={ilus2} alt="" className="ktg"/>
                        </div>
                        <div className="col-2" data-aos="fade-left">
                            <p>Name : Ringgo Galih Sadewo</p>
                            <p>Email : ringgo.118140076@student.itera.ac.id</p>
                            <p>Address : Bukit Bilabong Jaya Blok D4 No.11, Bandar Lampung</p>
                            <p>Gender : Male</p>
                            <p>Religion : Islam</p>
                            <p>Citizenship : Indonesian Citizens</p>
                            <button className="btn"><a href="">DOWNLOAD CV</a></button>
                        </div>
                    </div>
                </section>
                {/* End Profile */}

                {/* Project */}
                <section id="my-project">
                    <h1 data-aos="fade">- MY PROJECT -</h1>
                    <div className="project1">
                        <div className="col-1" data-aos="fade-right">
                            <p className="desc">Kelas Trading Gratis is a website that provides trading / investment learning. You will be taught by our professional mentors, there are lots of learning packages available, one of which is a zoom-based online learning package at the rates that have been described. This website is built with Laravel, HTML, CSS, AOS, Bootstrap, Javascript.</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/KelasTradingGratis" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://kelastradinggratis.com" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left" data-delay="400">
                            <img src={ktg} alt="" />
                        </div>
                    </div>
                    <div className="project2">
                        <div className="col-1" data-aos="fade-right">
                            <img src={rusiben} alt="" />
                        </div>
                        <div className="col-2" data-aos="fade-left" data-delay="400">           
                            <p className="desc">Sistem Perizinan Rubah Sifat dan Rubah Bentuk Kendaraan is a system that serves the public's licensing in changing the color of the motorized vehicle number and changing the shape of the motorized vehicle. This system implements several technologies in it such as checking google maps address via qr code, tracking mail, sending via email, qr code / digital signature. This system is built with Laravel, HTML, CSS, Bootstrap, Google Maps API, Qr Code, MySQL, PHP. This system is addressed to Dinas Perhubungan Provinsi Lampung.</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Sistem-perizinan-rubah-sifat-dan-rubah-bentuk-kendaraan" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project3">
                        <div className="col-1 paragraph" data-aos="fade-right">
                            <p className="desc">Somebil or the abbreviation of Social Media Bilabong is a system like social media in general, in this system users can register an account, login, create status, find friends, view friends, view friends status, view the latest news and much more. The system is built with Laravel, HTML, CSS, Bootstrap. This system is actually only to be used by residents of the Bilabong Jaya hill housing as a medium of information</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Somebil-Project" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://bit.ly/Somebil" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left" data-delay="400">
                            <img src={somebil} alt="" />
                        </div>
                    </div>
                    <div className="project4">
                        <div className="col-1" data-aos="fade-right">
                            <img src={cukurgeh} alt="" />
                        </div>
                        <div className="col-2 paragraph" data-aos="fade-left" data-delay="400">           
                            <p className="desc">Cukur Geh is a shaving booking system, users no longer need to wait in line to shave their hair. The system that I made is only in the form of landing pages, but has implemented responsive technology</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/cukurGeh" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.cukurgeh" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project5">
                        <div className="col-1 paragraph" data-aos="fade-right">
                            <p className="desc">Sammal is an abbreviation of Sampah Amal, an android-based mobile application that aims to make it easier for the community to dispose of garbage. But users can also give charity by ordering a lot of garbage pick-up, then the user's coins will automatically increase and the coins can be exchanged in the form of basic necessities. To work on this application, I am on the front-end using React Native</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Sammal-Project/tree/master" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left" data-delay="400">
                            <img src={sammal} alt="" />
                        </div>
                    </div>
                    <div className="project6">
                        <div className="col-1" data-aos="fade-right">
                            <img src={trayek} alt="" />
                        </div>
                        <div className="col-2 paragraph" data-aos="fade-left" data-delay="400">           
                            <p className="desc">Sistem perizinan izin trayek is a system that serves route / vehicle lane licensing. The public must register for a route permit if their vehicle passes a government road. This system implements MapBox API technology, Auto Generate PDF and many more</p>
                            <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/dishub" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project7">
                        <div className="col-1 paragraph" data-aos="fade-right">
                            <p className="desc">I also make some music, such as single music, background music and many more. All the music I make is on Soundcloud, the software I use to make this music is FL Studio</p>
                            <div className="linkProject">
                                <a href="https://soundcloud.com/zailon" target="_blank">
                                    <FontAwesomeIcon icon={faSoundcloud} />
                                </a>
                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left" data-delay="400">
                            <img src={soundcloud} alt="" />
                        </div>
                    </div>
                </section>
                {/* End Project */}

                {/* My Skills */}
                <section id="skills">
                    
                <h1 data-aos="fade">- My Skills -</h1>
                    <div className="skills">
                        <div className="col-1" data-aos="fade">
                            <img src={ilus3} alt="" />
                        </div>
                        <div className="col-2" data-aos="fede-right" data-delay="200">
                            <div className="skillsBars">
                                <p>Laravel</p>
                                <div className="progressBars">
                                    <div className="descBars">
                                        85%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>React JS</p>
                                <div className="progressBars">
                                    <div className="descBars2">
                                        75%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>React Native</p>
                                <div className="progressBars">
                                    <div className="descBars3">
                                        75%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>Javascript</p>
                                <div className="progressBars">
                                    <div className="descBars4">
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>PHP</p>
                                <div className="progressBars">
                                    <div className="descBars5">
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>Bootstrap</p>
                                <div className="progressBars">
                                    <div className="descBars6">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>HTML</p>
                                <div className="progressBars">
                                    <div className="descBars6">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>CSS</p>
                                <div className="progressBars">
                                    <div className="descBars6">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>MySQL</p>
                                <div className="progressBars">
                                    <div className="descBars4">
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="skillsBars">
                                <p>FL Studio</p>
                                <div className="progressBars">
                                    <div className="descBars">
                                        85%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End My Skills */}

                {/* footer */}
                <footer>
                    {/* <div className="logo">
                        <img src={logo2} alt=""/>
                    </div> */}
                    <div>
                        <p>Develop and design by Ringgo Galih Sadewo</p>
                    </div>
                </footer>
                {/* End Footer */}

            </div>
        )
    }
}

export default Index;

