import React, { Component } from "react";
import './Styles/Styles.css';
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Profile from "../Components/Profile/Profile";
import Project from "../Components/Project/Project";
import Skills from "../Components/Skills/Skills";
import Footer from "../Components/Footer/Footer";

class Index extends Component{

    constructor() {
        super();
        this.state = {
            bars: false
        }
    }

    render(){
        return(
            <div className="container">           
                <div className="bannerHero">
                    <Navbar />
                    <Banner />
                </div>   
                <Profile />
                <Project />
                <Skills />
                <Footer />
            </div>
        )
    }
}

export default Index;

