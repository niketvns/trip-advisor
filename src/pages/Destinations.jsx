import {useParams} from "react-router-dom";
import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import DestinationCard from "../components/DestinationCard.jsx";

const Destinations = () => {
    const {continentName, countryName} = useParams()
    const {findDestinations} = useGlobaltrips()

    const destinations = findDestinations(continentName, countryName).destinations

    return (
        <div className={'countries-main flex flex-col gap-8 items-center pt-12'}>
            <header className={'flex flex-col items-center gap-2'}>
                <h1 className={'text-3xl sm:text-3xl'}>Top Destinations in {countryName} for your next holiday</h1>
            </header>
            <div className="all-continents flex flex-wrap gap-4">
                {
                    destinations.map(destination => (
                        <DestinationCard key={destination.id} destination={destination}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Destinations;