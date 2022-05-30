import { useState } from 'react';
import './Tools.scss';

const Tools = () => {
    const [domain, setDomain] = useState("frontend")
    return (
        <div id="toolsContainer" className="tools">
            <h1>Tools & Technologies</h1>
            <div className="container">
                <form action="">
                    <input checked={(domain === "frontend") && true} type="radio" name="domain" value="frontend" id="frontend" onChange={(e) => setDomain(e.target.value)} />
                    <label htmlFor="frontend">Frontend</label>

                    <input checked={(domain === "backend") && true} type="radio" name="domain" value="backend" id="backend" onChange={(e) => setDomain(e.target.value)} />
                    <label htmlFor="backend">Backend</label>

                    <input checked={(domain === "tools") && true} type="radio" name="domain" value="tools" id="tools" onChange={(e) => setDomain(e.target.value)} />
                    <label htmlFor="tools">Tools</label>
                </form>
                <div className="itemContainer" style={domain === `frontend` ? { display: "flex" } : { display: "none" }}>
                    <div className="item">
                        <img src="assets/html.png" alt="" />
                        <p>
                            HTML
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/css.png" alt="" />
                        <p>
                            CSS
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/js.png" alt="" />
                        <p>
                            JavaScript
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/sass.png" alt="" />
                        <p>
                            SASS
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/react.png" alt="" />
                        <p>
                            REACT
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/bootstrap.png" alt="" />
                        <p>
                            BOOTSTRAP
                        </p>
                    </div>
                </div>
                <div className="itemContainer" style={domain === `backend` ? { display: "flex" } : { display: "none" }}>
                    <div className="item">
                        <img src="assets/node.png" alt="" />
                        <p>
                            NODE JS
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/express.png" alt="" />
                        <p>
                            EXPRESS JS
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/mongo.png" alt="" />
                        <p>
                            MONGO DB
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/mysql.png" alt="" />
                        <p>
                            MYSQL
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/jwt.png" alt="" />
                        <p>
                            JWT
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/fire.png" alt="" />
                        <p>
                            FIREBASE
                        </p>
                    </div>
                </div>
                <div className="itemContainer" style={domain === `tools` ? { display: "flex" } : { display: "none" }}>
                    <div className="item">
                        <img src="assets/vscode.png" alt="" />
                        <p>
                            VS CODE
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/postman.png" alt="" />
                        <p>
                            POSTMAN
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/git.png" alt="" />
                        <p>
                            GITHUB
                        </p>
                    </div>
                    <div className="item">
                        <img src="assets/netlify.png" alt="" />
                        <p>
                            NETLIFY
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tools