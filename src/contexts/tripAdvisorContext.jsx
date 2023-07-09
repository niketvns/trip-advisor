import {createContext, useContext, useState} from "react";
import {data} from "../db/data.js";

const tripAdvisorContext = createContext()

const TripAdvisorContextProvider = ({children}) => {
    const [tripData, setTripData] = useState(data.continents)

    const findCountries = (continentId) => {
        return tripData.find(continent => continent.id === Number(continentId)).countries
    }


    return(
        <tripAdvisorContext.Provider value={{tripData, findCountries}}>
            {children}
        </tripAdvisorContext.Provider>
    )
}

const useGlobaltrips = () => useContext(tripAdvisorContext)

export {TripAdvisorContextProvider, useGlobaltrips}