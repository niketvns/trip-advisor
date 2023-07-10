import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const DestinationDetails = () => {
    const {continentName, countryName, destinationName} = useParams()
    const {findDestinationDetails} = useGlobaltrips()
    const navigate = useNavigate()

    const destinationDetails = findDestinationDetails(continentName, countryName, destinationName)

    return (
        <>
            <div className="back w-fit flex items-center gap-2 cursor-pointer ml-4 pt-2" onClick={()=>navigate(-1)}>
                <BiArrowBack/> Back
            </div>
            <div className={'destination-main p-2 flex flex-col items-center w-full'}>
                <h1 className={'text-3xl py-4'}>{destinationDetails.name}</h1>
                <div className="card flex flex-col gap-4 md:flex-row md:my-8 md:max-w-[1000px] items-start">
                    <div className="image flex justify-center w-full md:w-auto">
                        <img src={destinationDetails.image} alt="image" className={' w-full sm:max-w-[500px] rounded'}/>
                    </div>
                    <div className="details flex flex-col gap-2 sm:gap-5 text-lg max-w-[500px] sm:text-xl md:flex-1">
                        <p>
                            <span className={'text-blue-500'}>Description: </span>
                            <span>{destinationDetails.description}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Rating: </span>
                            <span>{destinationDetails.ratings}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Review: </span>
                            <span>{destinationDetails.reviews}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Location: </span>
                            <span>{destinationDetails.location}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Opening Hours: </span>
                            <span>{destinationDetails.openingHours}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Ticket Price: </span>
                            <span>{destinationDetails.ticketPrice}</span>
                        </p>
                        <p>
                            <span className={'text-blue-500'}>Website: </span>
                            <Link to={destinationDetails.website} className={'underline'}>Link</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DestinationDetails;