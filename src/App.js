import React, { useState } from "react";
import dataGlasses from "./data/dataGlasses";
import GlassesList from "./components/GlassesList";
import "./App.css";

function App() {
    const [selectedGlasses, setSelectedGlasses] = useState(null);

    return (
        <div className="App">
            <h1 className="title">TRY GLASSES APP ONLINE</h1>
            <div className="model-section">
                <div className="model">
                    <img src="/glassesImage/model.jpg" alt="model" className="model-img" />
                    
                    {selectedGlasses && (
                        <>
                            <img
                                src={selectedGlasses.url}
                                alt="selected"
                                className="glasses-overlay"
                            />
                            <div className="glasses-info">
                                <h3>{selectedGlasses.name}</h3>
                                <p>{selectedGlasses.desc}</p>
                                <p>Price: ${selectedGlasses.price}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <GlassesList glassesData={dataGlasses} onSelect={setSelectedGlasses} />
        </div>
    );
}

export default App;
