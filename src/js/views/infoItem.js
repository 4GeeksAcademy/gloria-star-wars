import React from "react";
import { DetailedCardPeople } from "../component/DetailedCardPeople";
import { DetailedCardPlanets } from "../component/DetailedCardPlanets";
import { DetailedCardStarships } from "../component/DetailedCardStarships";
import { useLocation } from "react-router-dom";

export const InfoItem = () => {

    const path = useLocation()
    if (path.pathname.includes("people")) {
        return <DetailedCardPeople />
    } else if (path.pathname.includes("planets")) {
        return <DetailedCardPlanets />
    } else if (path.pathname.includes("starships")) {
        return <DetailedCardStarships />
    }
}