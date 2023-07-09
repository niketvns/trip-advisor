import {ImLocation} from "react-icons/im";

const DestinationCard = ({destination}) => {
    return (
        <div key={destination.id} className={'destination-card relative cursor-pointer'}
             onClick={() => navigate(`/${destination.name}/destinations/${destination.id}`)}>
            <img src={destination.image} alt="image" className={'w-64 rounded aspect-square object-cover'}/>
            <span
                className={'flex gap-2 items-center absolute bottom-2 left-2 bg-white/60 text-black px-2 rounded'}><ImLocation/> {destination.name}</span>
        </div>
    );
};

export default DestinationCard;