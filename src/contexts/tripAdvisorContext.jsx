import {createContext, useContext, useState} from "react";
import {data} from "../db/data.js";

const tripAdvisorContext = createContext()

const TripAdvisorContextProvider = ({children}) => {
    const [tripData, setTripData] = useState(data.continents)

    const findCountries = (continentName) => {
        return tripData.find(continent => continent.name === continentName)
    }

    const findDestinations = (continentName, countryName) => {
        return findCountries(continentName).countries.find(country => country.name === countryName)
    }

    const findDestinationDetails = (continentName, countryName, destinationName) => {
        return findDestinations(continentName, countryName).destinations.find(destination => destination.name === destinationName);
    }


    return (<tripAdvisorContext.Provider value={{tripData, findCountries, findDestinations, findDestinationDetails}}>
            {children}
        </tripAdvisorContext.Provider>)
}

const useGlobaltrips = () => useContext(tripAdvisorContext)

export {TripAdvisorContextProvider, useGlobaltrips}