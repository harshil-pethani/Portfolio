import { useState } from 'react';
import './Works.scss';

const Works = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const handleClick = (way) => (
        (way === "left") ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    )

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Weather Application",
            desc:
                "This will gives the Current Whether Information of any City",
            img:
                "project/project-1.png",
            url:"http://hp-api-app3.herokuapp.com/"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Notes Application",
            desc:
                "This Web application will store Your Notes in Your Local Storage",
            img:
                "project/project-2.png",
            url:"https://magic-notes.vercel.app/"
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Restaurant",
            desc:
                "This is an Restaurant Website",
            img:
                "project/project-3.png",
            url:"https://restaurant-roan-three.vercel.app/"
        },
    ];

    return (
        <div id="works" className="works">
            <h1>Works</h1>
            <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {
                    data.map(d => (
                        <div key={d.id} className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc} </p>
                                        <a href={d.url} target="_blank">
                                            <span>Project URL</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img onClick={() => handleClick("left")} src="assets/arrow.png" className="arrow left" alt="" />
            <img onClick={() => handleClick("right")} src="assets/arrow.png" className="arrow right" alt="" />
            <a href="#testimonials">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
    )
}

export default Works
