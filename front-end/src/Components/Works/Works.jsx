import { useState } from 'react';
import './Works.scss';

const Works = () => {
    const data = [
        {
            id: "1",
            title: "LuxuryHub",
            slogan: "Shop Your Favourite Fashion Products",
            domains: ["React JS", "Node JS", "Mongo DB", "Express JS", "SASS"],
            desc: ["Here User can view top Fashion Products available on LuxuryHub and Buy it. ", "After Login User can add Products into the Cart and place Order.", "User can View its Profile and can Update it.", "There is a Cookie used for Session Tracking so that every time user do not need to signin.", "After Placing Order Successfully User can Track its Order, checks Order Status, Update Order details like address and Cancel Order also."],
            url: "https://luxuryhub.herokuapp.com/"
        },
        {
            id: "2",
            title: "CryptoWall",
            slogan: "Keep Updated with Crypto Currency",
            domains: ["React JS", "Node JS", "Mongo DB", "Express JS", "SASS"],
            desc: ["Here User can view top 100 currencies their market cap, price and change in price", "User can view the Latest news about Crypto Currencies", "User can Check Detailed Information about any coin like Current Price, Market Cap, Coin History, 24 Hour Highest and Lowest Price etc.", "User can see the Graphical Representation of last 24 Hour, 1 Week, 1 Month and 1 Year Price changes of perticuler coin", "After Login User can add their Favourite Crypto Currencies to favourite List"],
            url: "https://cryptowal.herokuapp.com/"
        },
        {
            id: "3",
            title: "Weather Application",
            slogan: "Search City & Get Weather Info",
            domains: ["HTML", "CSS", "JavaScript", "BootStrap"],
            desc: ["It is a simple web-app using Weather API , which fetches data from API.", "When user types name of the City than it fetches Weather data for that city from API."],
            url: "http://hp-api-app3.herokuapp.com/"
        },
        {
            id: "4",
            title: "Notes Application",
            slogan: "Take a Note to Remember Your Work",
            domains: ["HTML", "CSS", "JavaScript", "BootStrap"],
            desc: ["This is a Simple Web application, in that User can add their Routine Tasks.", "Here User can also give Category for the Task based on it user can filter out the Tasks."],
            url: "https://magic-notes.vercel.app/"
        },
    ];

    return (
        <div id="works" className="works">
            <h1>Projects</h1>
            <div className="slider">
                {
                    data.map(d => (
                        <div key={d.id} className="container">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p className="slogan">{d.slogan} </p>
                                    <div className="domains">
                                        {
                                            d.domains.map(domain => (
                                                <p className="domain">
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
                                            d.desc.map(descItem => (
                                                <li>
                                                    {descItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="urls">
                                        <a href={d.url} target="_blank" className="url">
                                            <span>URL</span>
                                        </a>
                                        |
                                        <a href={d.url} target="_blank" className="url">
                                            <span>Github</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <a target="_blank" href="https://github.com/mrpethani" className="button">
                More Projects
            </a>
        </div >
    )
}

export default Works
