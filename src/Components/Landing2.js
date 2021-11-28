import React, { useEffect } from "react";
import Cube from "./Cube";

const Landing2 = () => {

    useEffect(() => {
        const icons = document.querySelector('.landing2__mediaicons');
        const email = document.querySelector('.landing2__email');
        email.addEventListener('scroll', () => {
            email.classlist.add('fixed-header');
            email.classList.toggle('fixed-header');
        });
        icons.addEventListener('scroll', () => {
            icons.classList.add('fixed-header');
            icons.classList.toggle('fixed-header');
        });


    }, [])
    return (
        <div className="landing2">
           <div className="landing2__main">
                <h1 className="landing2__header">
                    Hi there! I'm <span className="landing2__header-name">Tom Zheng</span>
                </h1>
                <h4 className="landing2__description">
                    Full Stack Developer  <span>&</span>  UC Berkeley Undergrad 
                </h4>
                <a href='resume.pdf' download className="landing2__button">
                            Download Resume
                            <span></span><span></span><span></span><span></span>
                </a>
           </div>
           <Cube />
           <div className="landing2__mediaicons">
                        <span></span>
                        <a id="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tomzheng1/">
                            <button className="landing2__mediaicons-btn">
                                <i class="fab fa-linkedin-in"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="https://github.com/tomzheng2001">
                            <button className="landing2__mediaicons-btn">
                                <i class="fab fa-github-square"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100036140251490">
                            <button className="landing2__mediaicons-btn">
                                <i class="fab fa-facebook-square"></i>
                            </button>
                        </a>
                        <a id="link" target="_blank" rel="noreferrer" href="mailto: tomzheng@berkeley.edu">
                            <button className="landing2__mediaicons-btn">
                                <i class="far fa-envelope"></i>
                            </button>    
                        </a>
                        <span></span>
            </div>
            <div className="landing2__email">
                <span></span>
                <a id="link" target="_blank" rel="noreferrer" href="mailto: tomzheng@berkeley.edu">
                    tomzheng@berkeley.edu <i class="fas fa-envelope-open"></i>
                </a> 
                <span></span>
            </div>
        </div>
    );
};

export default Landing2;