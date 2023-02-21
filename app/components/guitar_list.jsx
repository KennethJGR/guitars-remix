import React from "react";
import Guitars from "./guitar";

const GuitarList = ({ guitars }) => {
    return (
        <>
            <h2 className="heading">Our Collection</h2>
            {guitars?.length && (
                <div className="guitars-grid">
                    {guitars.map((guitar) => (
                        <Guitars key={guitar?.id} guitar={guitar?.attributes} />
                    ))}
                </div>
            )}
        </>
    );
};

export default GuitarList;
