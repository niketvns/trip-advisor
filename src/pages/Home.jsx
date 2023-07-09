import {useGlobaltrips} from "../contexts/tripAdvisorContext.jsx";
import ContinentCard from "../components/ContinentCard.jsx";

const Home = () => {

    const {tripData} = useGlobaltrips()

    return (
        <div className={'home-main flex flex-col gap-8 items-center pt-8'}>
            <header className={'flex flex-col items-center gap-2'}>
                <h1 className={'text-3xl sm:text-4xl'}>Welcome to trip Advisor</h1>
                <p className={'text-lg sm:text-xl text-blue-500'}>Top continents for your next holiday</p>
            </header>
            <div className="all-continents flex flex-wrap gap-4">
                {
                    tripData.map(continent => (
                        <ContinentCard key={continent.id} continent={continent}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;