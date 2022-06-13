import React,{ Component } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faSoundcloud, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ilus1 from '../../Assets/hero.png';

class Banner extends Component {
    render(){
        return(
            <div>
                {/* Banner */}
                <section id="banner">
                    <div className="col-1" data-aos="fade">
                        <h1>Hello, I'm
                            <Typewriter 
                                words={[' Ringgo Galih Sadewo']}
                                cursor
                                cursorStyle="_"
                                typeSpeed={350}
                            />
                        </h1>
                        <p>
                            I'm an expert in the field of Web Apps, Mobile Apps, Music Composers. I'm a Lead Full Stack Engineer at a <a href="https://www.linkedin.com/company/cinda-logika-grafia/mycompany/">Cinda Logika Grafia</a>
                        </p>
                        <p>
                            The technologies I usually use are Laravel, Code Igniter, Bootstrap, React JS, React Native, Javascript, MySQL, FL Studio and many more. This website my portfolio was built with React JS.
                        </p>
                        <div className="btnHero">
                            <a href="#profile">
                                <button className="btn">VIEW PROFILE</button>
                            </a>
                            <a href="https://github.com/RinggoGalihSadewo" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="http://www.linkedin.com/in/ringgo-galih-sadewo" target="_blank" className="sosmed">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://instagram.com/ringgo.gs" target="_blank" className="sosmed">
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
                    <div className="col-2" data-aos="fade">
                        <div className="circle"></div>
                        <img src={ilus1} alt="" />
                    </div>
                </section>
                {/* End Banner */}
            </div>
        )
    }
}

export default Banner;