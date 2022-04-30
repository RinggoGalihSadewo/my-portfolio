import React,{ Component } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faSoundcloud, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
                        <img src={ilus1} alt="" />
                    </div>
                </section>
                {/* End Banner */}
            </div>
        )
    }
}

export default Banner;