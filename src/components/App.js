import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
    const [selectedShape, setSelectedShape] = useState("square");
    const [shapes, setShape] = useState([]);

    function addShape() {
        const updatedShapes = [...shapes];
        updatedShapes.push(selectedShape);
        setShape(updatedShapes);
    }

    function handleChange(event) {
        setSelectedShape(event.target.value);
    }

    return (
        <div id="main">
            <div id="shape-creator">
                <select onChange={handleChange}>
                    <option>Square</option>
                    <option>Circle</option>
                </select>
                <button onClick={addShape}>Add Shape</button>
            </div>
            <div id="shapes-holder">
                {shapes.map((item, index) => {
                    return (
                        <div className={item?.toLowerCase()}>{index + 1}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
