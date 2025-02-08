import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailedCardPeople = () => {
    const { store } = useContext(Context)

    return (
        <div className="container bg-dark text-white">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${store.infoDetailPeople.id}.jpg`} style={{ width: "400px" }} />
                </div>
                <div className="col-6">
                    <h1>{store.infoDetailPeople.name}</h1>
                    <p >In the beginning there was nothing, then, through spontaneous generation, enters three beings. A Father, a Son, and a Daughter. The Daughter was of the light, the Son was of the dark, and the Father was charged with keeping the balance between the two. These beings had the ability to create life, and thus the Star Wars universe began.</p>
                </div>
            </div>
            <hr />
            <div className="row ">
                <div className="col-2">
                    <h3>Name</h3>
                    <p>{store.infoDetailPeople.name}</p>
                </div>
                <div className="col-2">
                    <h3>Birthday Year</h3>
                    <p>{store.infoDetailPeople.birth_year}</p>
                </div>
                <div className="col-2">
                    <h3>Gender</h3>
                    <p>{store.infoDetailPeople.gender}</p>
                </div>
                <div className="col-2">
                    <h3>Height</h3>
                    <p>{store.infoDetailPeople.height}</p>
                </div>
                <div className="col-2">
                    <h3>Skin Color</h3>
                    <p>{store.infoDetailPeople.skin_color}</p>
                </div>
                <div className="col-2">
                    <h3>Eye Colors</h3>
                    <p>{store.infoDetailPeople.eye_color}</p>
                </div>
            </div>
        </div>
    )
}