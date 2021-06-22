import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["Developer", "Designer", "Content Creator"]
        });
    }, [])

    return (
        <div id="intro" className="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/hp.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Harshil Pethani</h1>
                    <h3>Freelance <span ref={textRef}></span>
                    </h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
