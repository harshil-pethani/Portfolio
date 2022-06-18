import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion/dist/framer-motion'

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["FullStack Developer", "Web Designer", "Freelancer"]
        });
    }, [])

    return (
        <div id="intro" className="intro">
            <div className="left">
                <motion.div whileInView={{ scale: [0, 1] }} className="imgContainer">
                    <img src="assets/hp.png" alt="" />
                </motion.div>
            </div>
            <div className="right">
                <motion.div
                    transition={{ duration: .5 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Harshil Pethani</h1>
                    <h3> <span ref={textRef}></span>
                    </h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Intro
