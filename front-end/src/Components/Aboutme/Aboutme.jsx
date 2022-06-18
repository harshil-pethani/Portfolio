import { Link } from 'react-router-dom';
import './Aboutme.scss';
import { motion } from 'framer-motion/dist/framer-motion'

const Aboutme = () => {
    return (
        <div id="aboutme" className="aboutme">
            <h1 >
                About Me
            </h1>
            <motion.p transition={{ duration: .5 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="desc">
                Currently I am pursuing B.Tech in the field of Information Technology from BVM , Anand. I have interest in web development , both front-end and back-end ,and I am also interested in competitive programming. I am always passionate to learn new tools and technologies.
            </motion.p>
            <h2>
                Education
            </h2>
            <div className="container">
                <div className="detail">
                    <p>
                        Birla Vishvakarma Mahavidyalaya
                    </p>
                    <p>
                        2019-23
                    </p>
                </div>
                <div className="subdetail">
                    <p>
                        B.Tech , Information Technology
                    </p>
                    <p>
                        9.33 CPI
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="detail">
                    <p>
                        Wisdom International School
                    </p>
                    <p>
                        2017-19
                    </p>
                </div>
                <div className="subdetail">
                    <p>
                        12th PCM
                    </p>
                    <p>
                        87%
                    </p>
                </div>
            </div>
            <a className="button" target="_blank" href="https://drive.google.com/file/d/1DCo1MXzXp45HFkEJ5yFqHWi1Bzwu-f68/view?usp=sharing">
                My Resume
            </a>
        </div>
    )
}

export default Aboutme