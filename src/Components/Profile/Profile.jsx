import React, { Component } from "react";
import ilus2 from '../../Assets/undraw_hello_re_3evm.svg';
import cv from '../../Assets/CV_Ringgo Galih Sadewo.png';

class Profile extends Component {
    render(){
        return(
            <div>
                {/* Profile */}
                <section id="profile">
                    <h1 data-aos="fade">- PROFILE -</h1>
                    <div className="profile">
                        {/* <div className="col-1" data-aos="fade">
                            <img src={ringgo} alt="" />
                        </div> */}
                        <div className="col-1" data-aos="fade">
                            <img src={ilus2} alt="" className="ktg"/>
                        </div>
                        <div className="col-2" data-aos="fade">
                            <p>Name : Ringgo Galih Sadewo</p>
                            <p>Email : ringgo.118140076@student.itera.ac.id</p>
                            <p>City : Bandar Lampung</p>
                            <p>Phone Number : 083177117265</p>
                            <button className="btn"><a href={cv} download>DOWNLOAD CV</a></button>
                        </div>
                    </div>
                </section>
                {/* End Profile */}
            </div>
        )
    }
}

export default Profile;