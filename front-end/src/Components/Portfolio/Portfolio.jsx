import './Portfolio.scss';
import Portfoliolist from '../PortfolioList/Portfoliolist';
import { useState, useEffect } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);


    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content",
        },
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }

    }, [selected]);

    return (
        <div id="portfolio" className="portfolio">
            <h1>
                Portfolio
            </h1>
            <ul>
                {list.map(item => (
                    <Portfoliolist key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {
                    data.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;
