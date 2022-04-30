import React, { Component } from "react";
import ilus3 from '../../Assets/undraw_percentages_re_a1ao.svg';

class Skills extends Component {
    render(){
        return(
            <div>
                {/* My Skills */}
                <section id="skills"> 
                    <h1 data-aos="fade">- My Skills -</h1>
                    <div className="skills">
                        <div className="col-1" data-aos="fade">
                            <img src={ilus3} alt="" />
                        </div>
                        <div className="col-2" data-aos="fade" data-delay="200">
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
            </div>
        )
    }
}

export default Skills;