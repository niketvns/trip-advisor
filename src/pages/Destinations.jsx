import React from 'react';
import {useParams} from "react-router-dom";
import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import CountryCard from "../components/CountryCard.jsx";

const Destinations = () => {
    const {countryName, countryId} = useParams()
    // const {findCountries} = useGlobaltrips()
    //
    // const countries = findCountries(continentId)

    return (
        <div className={'countries-main flex flex-col gap-8 items-center pt-12'}>
            <header className={'flex flex-col items-center gap-2'}>
                <h1 className={'text-3xl sm:text-3xl'}>Top Destinations in {countryName} for your next holiday</h1>
            </header>
            <div className="all-continents flex flex-wrap gap-4">

            </div>
        </div>
    )
};

export default Destinations;