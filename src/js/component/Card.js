import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";

export const Card = (props) => {

    const [likeButton, setLikeButton] = useState("bi-heart")
    const [likeValidator, setLikeValidator] = useState(false)
    const [typeView, setTypeView] = useState("camilo")
    let navigate = useNavigate()
    const { store, actions } = useContext(Context)

    const handleClick = () => {
        actions.getDetails(props.url, props.uid)
        if (props.url.includes("planets")) {
            navigate("./detailedPlanets");
        } else if (props.url.includes("starships")) {
            navigate("./detailedStarships");
        } else if (props.url.includes("people")) {
            navigate("./detailedPeople");
        } else {
            console.warn("Ruta no reconocida:", url);
        }
    };

    const favoriteList = () => {

        if (!likeValidator) {
            actions.setFavoriteArray(props);
            setLikeButton("bi-heart-fill")
            setLikeValidator(true)
        } else {
            actions.deleteFavorite(props);
            setLikeButton("bi-heart")
            setLikeValidator(false)
        }
    }

    useEffect(() => {
        if (!store.favoriteArray.includes(props.name)) {
            store.favoriteArray
            setLikeValidator(false)
            setLikeButton("bi-heart")
        };
        if (store.people.find(item => item.properties.name == props.name)) {
            setTypeView("people")
        } else if (store.planets.find(item => item.properties.name == props.name)) {
            setTypeView("planets")
        } else if (store.starships.find(item => item.properties.name == props.name)) {
            setTypeView("starships")
        }
    }, [store.favoriteArray])

    return (
        <div className="col-sm-4 bg-dark text-white p-3">
            <div className="card m-3 bg-light">
                <img src={props.image} loading="lazy" className="card-img-top" alt="..." />
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>{props.gender}</p>
                    <p>{props.eye_color}</p>
                    <p>{props.hair_color}</p>
                    <p>{props.population}</p>
                    <p>{props.terrain}</p>
                    <p>{props.climate}</p>
                    <p>{props.passengers}</p>
                    <p>{props.model}</p>
                    <p>{props.cargo_capacity}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handleClick}>Learn More!</button>
                        <button className= "btn btn-primary" {...`bi ${likeButton}`} onClick={favoriteList}>Favorite</button>
                    </div>
                </div>
            </div >
        </div>
    )
}