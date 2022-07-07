import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import ktg from '../../Assets/ktg.png';
import rusiben from '../../Assets/rusiben.png';
import somebil from '../../Assets/somebil.png';
import cukurgeh from '../../Assets/cukurgeh.png';
import sammal from '../../Assets/sammal.png';
import trayek from '../../Assets/trayek.png';
import soundcloud from '../../Assets/soundcloud.png';

class Project extends Component {
    render(){
        return(
            <div>
                {/* Project */}
                <section id="my-project">
                    <h1 data-aos="fade">- MY PROJECT -</h1>
                    <div className="project1">
                        <div className="col-1" data-aos="fade-right">
                            <p className="desc">Kelas Trading Gratis is a website that provides trading / investment learning. You will be taught by our professional mentors, there are lots of learning packages available, one of which is a zoom-based online learning package at the rates that have been described. This website is built with Laravel, HTML, CSS, AOS, Bootstrap, Javascript.</p>
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/KelasTradingGratis" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://kelastradinggratis.com" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
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
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Sistem-perizinan-rubah-sifat-dan-rubah-bentuk-kendaraan" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="project3">
                        <div className="col-1 paragraph" data-aos="fade-right">
                            <p className="desc">Somebil or the abbreviation of Social Media Bilabong is a system like social media in general, in this system users can register an account, login, create status, find friends, view friends, view friends status, view the latest news and much more. The system is built with Laravel, HTML, CSS, Bootstrap. This system is actually only to be used by residents of the Bilabong Jaya hill housing as a medium of information</p>
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Somebil-Project" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://bit.ly/Somebil" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
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
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/cukurGeh" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.cukurgeh" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="project5">
                        <div className="col-1 paragraph" data-aos="fade-right">
                            <p className="desc">Sammal is an abbreviation of Sampah Amal, an android-based mobile application that aims to make it easier for the community to dispose of garbage. But users can also give charity by ordering a lot of garbage pick-up, then the user's coins will automatically increase and the coins can be exchanged in the form of basic necessities. To work on this application, I am on the front-end using React Native</p>
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/Sammal-Project/tree/master" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
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
                            {/* <div className="linkProject">
                                <a href="https://github.com/RinggoGalihSadewo/dishub" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </div> */}
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
                            {/* <img src={soundcloud} alt="" /> */}
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZAbiXfjiDrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 10}}></iframe>
                        </div>
                    </div>
                </section>
                {/* End Project */}
            </div>
        )
    }
}

export default Project;