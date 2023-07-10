import {useNavigate, useParams} from "react-router-dom";
import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import {BiArrowBack} from "react-icons/bi";

const Destinations = () => {
    const {continentName, countryName} = useParams()
    const {findDestinations} = useGlobaltrips()
    const navigate = useNavigate()

    const country = findDestinations(continentName, countryName)

    return (
        <>
            <div className="back w-fit flex items-center gap-2 cursor-pointer ml-4 pt-2" onClick={()=>navigate(-1)}>
                <BiArrowBack/> Back
            </div>
            <div className={'countries-main flex flex-col gap-8 items-center pt-12 px-3'}>
                <header className={'flex flex-col items-center gap-2'}>
                    <h1 className={'text-3xl sm:text-3xl'}>Top Destinations in {countryName} for your next holiday</h1>
                </header>
                <div className="all-continents flex flex-wrap gap-4">
                    {
                        country.destinations.map(destination => (
                            <DestinationCard key={destination.id} destination={destination} country={country} continentName={continentName}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Destinations;