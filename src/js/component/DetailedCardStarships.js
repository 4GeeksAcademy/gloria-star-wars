import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailedCardStarships = () => {
    const { store } = useContext(Context);

    return (
        <div className="container  bg-dark text-white">
        <div className="row">
            <div className="col-6">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${store.infoDetailStarships.id}.jpg`} style={{ width: "400px" }} />
            </div>
            <div className="col-6">
                <h1>{store.name}</h1>
                <p >In the beginning there was nothing, then, through spontaneous generation, enters three beings. A Father, a Son, and a Daughter. The Daughter was of the light, the Son was of the dark, and the Father was charged with keeping the balance between the two. These beings had the ability to create life, and thus the Star Wars universe began.</p>
            </div>
        </div>
        <hr />
            {/* Sección con detalles */}
            <div className="row text-center">
                <div className="col-2">
                    <h3>Name</h3>
                    <p>{store.infoDetailStarships.name}</p>
                </div>
                <div className="col-2">
                    <h3>Passengers</h3>
                    <p>{store.infoDetailStarships.passengers}</p>
                </div>
                <div className="col-2">
                    <h3>Length</h3>
                    <p>{store.infoDetailStarships.length}</p>
                </div>
                <div className="col-2">
                    <h3>Cargo Capacity</h3>
                    <p>{store.infoDetailStarships.cargo_capacity}</p>
                </div>
                <div className="col-2">
                    <h3>Cost In Credits</h3>
                    <p>{store.infoDetailStarships.cost_in_credits}</p>
                </div>
                <div className="col-2">
                    <h3>Manufacturer</h3>
                    <p>{store.infoDetailStarships.manufacturer}</p>
                </div>
            </div>
        </div>
    );
};