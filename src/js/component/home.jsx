import React, { useState } from "react";

function TrafficLights() {
    const [selectedColor, setSelectedColor] = useState("red");
    console.log(selectedColor);

    return (
        <div className="container">
            <div className="traffic-post">
            <div className="traffic-light ">
                <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? "glowb red" : "glowred")}></div>
                <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glowyellow" : "")}></div>
                <div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glowgreen" : "")}></div>
            </div>
			</div>
        </div>
    );
}

export default TrafficLights;
