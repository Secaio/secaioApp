import React from 'react'
import Main from '../components/Main'
import img from '../assets/imgs/me.jpg'


export default props =>
    <React.Fragment>
        <Main>
            <div className="grid-item">
                <div className="quadro">
                 <img className="imagem" src={img} alt="Yes, this is" ></img>
                </div>
            </div>
            <div className="grid-item">
                <div className="quadro">
                <div className="helopar">
                    <h6>HELLO EVERYBODY, I AM</h6>
                    <div className="meunnome">Romeu Cornelius Junior</div>
                    <h4>Senior Sofware Developer</h4>
                    <p className="parAbout text-muted">
                        I'm passionate about software development, data visualization, and applying science and technology in the majority world by
                        taking what's in a scientific publication and turning it into a real project that solves a business need.
                        </p>
                    <ul className="list personal_social">
                        <li><a href="https://www.facebook.com/romeu.corneliusjunior" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/romeucorneliusjunior/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/romeucjunior/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </Main>
    </React.Fragment>

