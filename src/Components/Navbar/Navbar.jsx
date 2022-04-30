import React, { Component } from "react";
import logo from '../../Assets/logo.png';


class Navbar extends Component {
    render(){
        return(
            <div>
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
                            {/* <div className="bars">
                                <button onClick={() => this.setState({bars: true})}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                            <div className="humbergerMenu">
                                {this.state.bars && <humMenu/>}
                            </div> */}
                        </ul>
                        {/* <div className="iconNav">
                                <img src={bars} alt="" />
                        </div> */}
                    </div>
                </nav>
                {/* End Navbar */}
            </div>
        )
    }
}

export default Navbar;