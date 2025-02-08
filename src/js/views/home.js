import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";
import { PlaceholderCard } from "../component/PlaceholderCard";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		store.endPoints.map((endPoint) => { actions.getInfoCard(endPoint) })
	}, [])
	return (
		<div className="container mt-3">
			<div className="row d-flex justify-content-center">
				<h2>Characters</h2>
				<div className="overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{store.people.length > 0 ? store.people.map((people) => {
							return (
								<Card name={people.properties.name} uid={people.uid} image={people.image} key={people.uid} url={people.properties.url} gender={`Gender: ${people.properties.gender}`}
									hair_color={`Hair Color: ${people.properties.hair_color}`}
									eye_color={`Eye Color: ${people.properties.eye_color}`}
								/>
							)
						}) : <PlaceholderCard />}
					</div>
				</div>
			</div>
			<div className="row">
				<h2>Planets</h2>
				<div className="overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{store.planets.length > 0 ? store.planets.map((planet) => {
							return (
								<Card name={planet.properties.name} uid={planet.uid} image={planet.image} key={planet.uid} url={planet.properties.url}
									population={`Population: ${planet.properties.population}`}
									terrain={`Terrain: ${planet.properties.terrain}`}
									climate={`Climate: ${planet.properties.climate}`} />
							)
						}) : <PlaceholderCard />}
					</div>
				</div>
			</div>
			<div className="row">
				<h2>Starships</h2>
					<div className="overflow-auto">
						<div className="d-flex flex-row flex-nowrap">
							{store.starships.length > 0 ? store.starships.map((starship) => {
								return (
									<Card name={starship.properties.name} uid={starship.uid} image={starship.image} key={starship.uid} url={starship.properties.url}
										passengers={`Passengers: ${starship.properties.passengers}`}
										model={`Model: ${starship.properties.model}`}
										cargo_capacity={`Cargo Capacity: ${starship.properties.cargo_capacity}`} />
								)
							}) : <PlaceholderCard />}
					</div>
				</div>
			</div>
		</div>
	)
} 