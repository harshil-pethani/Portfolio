import './projects.scss';
import { motion } from 'framer-motion/dist/framer-motion'


const Projects = () => {
    const data = [
        {
            id: "1",
            title: "LuxuryHub",
            slogan: "Shop Your Favourite Fashion Products",
            domains: ["React JS", "Node JS", "Mongo DB", "Express JS", "SCSS"],
            desc: ["Here User can view top Fashion Products available on LuxuryHub and Buy it.", "After Login User can add Products into the Cart and place Order.", "User can View its Profile and can Update it.", "There is a Cookie used for Session Tracking so that every time user do not need to signin.", "After Placing Order Successfully User can Track its Order, checks Order Status, Update Order details like address and Cancel Order also."],
            assets: ["project/p31.png", "project/p32.png", "project/p33.png", "project/p34.png"],
            url: "https://luxuryhub.herokuapp.com/",
            git: "https://github.com/mrpethani/LuxuryHub"
        },
        {
            id: "2",
            title: "CryptoWall",
            slogan: "Keep Updated with Crypto Currency",
            domains: ["React JS", "Node JS", "Mongo DB", "Express JS", "SCSS"],
            desc: ["Here User can view top 100 currencies their market cap, price and change in price.", "User can view the Latest news about Crypto Currencies.", "User can Check Detailed Information about any coin like Current Price, Market Cap, Coin History, 24 Hour Highest and Lowest Price etc.", "User can see the Graphical Representation of last 24 Hour, 1 Week, 1 Month and 1 Year Price changes of perticuler coin.", "After Login User can add their Favourite Crypto Currencies to favourite List."],
            assets: ["project/p21.png", "project/p22.png", "project/p23.png", "project/p24.png"],
            url: "https://cryptowal.herokuapp.com/",
            git: "https://github.com/mrpethani/CryptoWall"
        },
        {
            id: "3",
            title: "PhotoFlash",
            slogan: "Search Image & Download the Image",
            domains: ["React Js", "SCSS", "JavaScript", "AOS"],
            desc: ["It is a simple web-app using React Js, Here it fetches data from API.", "When user Select any Category or Type the Image name in the Search Box the Application will make a request to API.", "Based on Category This app will show you the result of Images.", "User can also Download that assets to its local storage."],
            assets: ["project/p11.png", "project/p12.png"],
            url: "https://photo-flash.netlify.app/",
            git: "https://github.com/mrpethani/PhotoFlash"
        },
    ];



    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projectContainer">
                {
                    data.map((d, i) => (
                        <div key={d.id} className={"container " + "project" + i}>
                            <motion.div
                                transition={{ duration: .5 }}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="leftContainer">
                                <h2>{d.title}</h2>
                                <p className="slogan">{d.slogan} </p>
                                <div className="domains">
                                    {
                                        d.domains.map((domain, ind) => (
                                            <p key={ind} className="domain">
                                                {domain}
                                            </p>
                                        ))
                                    }
                                </div>
                                <h4>
                                    Description :-
                                </h4>
                                <ul>
                                    {
                                        d.desc.map((descItem, ind) => (
                                            <li key={ind}>
                                                - {descItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="urls">
                                    <a href={d.url} target="_blank" className="url">
                                        <span>Live Site</span>
                                    </a>
                                    |
                                    <a href={d.git} target="_blank" className="url">
                                        <span>Github</span>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                className="rightContainer">
                                <div className="images">
                                    {
                                        d.assets.map((img, ind) => (
                                            <img key={ind} src={img} alt="" />
                                        ))
                                    }
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
            </div>

            <a target="_blank" href="https://github.com/mrpethani" className="button">
                More Projects
            </a>
        </div>
    )
}

export default Projects
