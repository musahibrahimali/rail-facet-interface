import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Need from "./need/Need";
import FACT from "./fact/FACT";
import Glossary from "./glossary/Glossary";
import Feedback from "./feedback/Feedback";
import Footer from "./footer/Footer";
import "./app.scss";



const App = () => {
    return (
        <div className="responsible-ai">
            <div className="router-content">
                <Navbar />
                <section className="section">
                    <Routes>
                        <Route path="/fact" element={<FACT />} />
                        <Route path="/glossary" element={<Glossary />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route exact path="/" element={<Need />} />
                    </Routes>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default App;
