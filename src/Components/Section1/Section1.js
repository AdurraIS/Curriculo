import './Section1.css';

import linkedn from '../../assets/link.png';
import github from '../../assets/github.png';
export default function Section1() {
    return (
        <>
            <div className="container-section1">
                <h1>Giovanni Ultramari</h1>
                <h2>Software Developer</h2>
                <div className="container-links">
                    <a href="https://www.linkedin.com/in/giovanni-ultramari/">
                        <img className="icone" src={linkedn} alt="Linkedin Link"/>
                    </a>
                    <a href="https://github.com/AdurraIS">
                        <img className="icone git" src={github} alt="Git Link"/>
                    </a>
                </div>
            </div>


        </>
    );
}


