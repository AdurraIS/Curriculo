import './Section1.css';

import linkedn from '../../assets/link.png';
import github from '../../assets/github.png';
import seta from '../../assets/seta.png';
export default function Section1() {
    return (
        <>
            <div className="container-section1">
                <h1>Giovanni Ultramari</h1>
                <h2>Software Developer</h2>
                <div className="container-links">
                    <a href="https://www.linkedin.com/in/giovanni-ultramari/" target="_blank">
                        <img className="icone" src={linkedn} alt="Linkedin Link"/>
                    </a>
                    <a href="https://github.com/AdurraIS" target="_blank">
                        <img className="icone git" src={github} alt="Git Link" />
                    </a>
                </div>
                <img className="icone seta" src={seta} alt="Seta para baixo"/>
            </div>


        </>
    );
}


