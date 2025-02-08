import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			endPoints: ["people", "planets", "starships"],
			infoDetailPeople: {},
			infoDetailStarships: {},
			infoDetailPlanets: {},
			favoriteArray: [],
		},
		actions: {
			getInfoCard: async (endPoint) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					if (JSON.parse(localStorage.getItem([endPoint])) == null) {
						const response = await fetch(`https://www.swapi.tech/api/${endPoint}`, requestOptions);
						const result = await response.json();
						const detailedPeople = await Promise.all
							(
								result.results.map(async (personAllInfo) => {
									const detailResponse = await fetch(`${personAllInfo.url}`, requestOptions);
									const detailResult = await detailResponse.json();
									detailResult.result["image"] = `https://starwars-visualguide.com/assets/img/${endPoint == "people" ? "characters":endPoint}/${detailResult.result.uid}.jpg`
									return detailResult.result;
								})
							)
						localStorage.setItem([endPoint], JSON.stringify(detailedPeople));
						setStore({ [endPoint]: detailedPeople })
						const store = getStore()
						console.log("ASAASADA");

					} else {
						setStore({ [endPoint]: JSON.parse(localStorage.getItem([endPoint])) })
					}
				} catch (error) {
					console.error(error);
				}
			},
			getDetails: async (endPoint, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					const response = await fetch(`${endPoint}`, requestOptions);
					const data = await response.json();
					let store = getStore()
					if (endPoint.includes("planets")) {
						setStore({ ...store, infoDetailPlanets: {...data.result.properties, id:id} });
					} else if (endPoint.includes("starships")) {
						setStore({ ...store, infoDetailStarships: {...data.result.properties, id:id} });
					} else if (endPoint.includes("people")) {
						console.log('Esto es infoDetailPeople', data.result.properties)
						setStore({ ...store, infoDetailPeople: {...data.result.properties, id:id} });
					} else {
						console.warn("Ruta no reconocida:", url);
					}
					
				} catch (error) {
					console.error(error);
				}
			},
			setFavoriteArray: (newFavorite) => {
				const store = getStore()
				setStore({ favoriteArray: store.favoriteArray.concat([newFavorite]) })
			},
			deleteFavorite: (name) => {
				const store = getStore()
				const newFavoriteArray = store.favoriteArray.filter((element) => name != element.name);
				setStore({ favoriteArray: newFavoriteArray })
			},
		}
	}
}
export default getState;
