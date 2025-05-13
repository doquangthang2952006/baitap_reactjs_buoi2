import React from "react";
import GlassesItem from "./GlassesItem";

function GlassesList({ glassesData, onSelect }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {glassesData.map((item) => (
                <GlassesItem key={item.id} glasses={item} onSelect={onSelect} />
            ))}
        </div>
    );
}

export default GlassesList;
