import {useParams} from "react-router-dom";
import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import CountryCard from "../components/CountryCard.jsx";

const Countries = () => {
    const {continentId, continentName} = useParams()
    const {findCountries} = useGlobaltrips()

    const countries = findCountries(continentId)

    return (
        <div className={'countries-main flex flex-col gap-8 items-center pt-12'}>
            <header className={'flex flex-col items-center gap-2'}>
                <h1 className={'text-3xl sm:text-3xl'}>Top countries in {continentName} for your next holiday</h1>
            </header>
            <div className="all-continents flex flex-wrap gap-4">
                {
                    countries.map(country => (
                        <CountryCard key={country.id} country={country}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;