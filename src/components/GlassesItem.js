import React from "react";

function GlassesItem({ glasses, onSelect }) {
    return (
        <button onClick={() => onSelect(glasses)} style={{ border: "none", background: "transparent" }}>
            <img
                src={glasses.url}
                alt={glasses.name}
                width="100"
                style={{ margin: "10px", cursor: "pointer" }}
            />
        </button>
    );
}

export default GlassesItem;
