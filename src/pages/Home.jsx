import React from "react";
import "./home.css"; 

const Home = () => {
    return (
        <div className="home">
            {/* Rubrik */}
            <h1>VITLÖK, VITLÖK OCH VITLÖK..</h1>
            <section className="hero">
                <p>
                    På Klyftan älskar vi vitlök. Här doftar varje rätt av passion och varje tugga bär på kraften från den älskade klyftan. Vår meny är en smakrik resa för vitlöksälskare – från krämiga såser och ugnsrostade rätter till oväntade sötsaker med en hint av vitlök. Välkommen till Klyftan – där vitlök inte bara är en ingrediens, det är en livsstil.
                </p>
            </section>

            {/* Bild med knapp */}
            <section className="menu-section">
                <div className="image-container">
                    <button className="menu-button">Meny</button>
                </div>
            </section>
        </div>
    );
};

export default Home;

