import {ImLocation} from "react-icons/im";
import {useNavigate} from "react-router-dom";

const CountryCard = ({country, continent}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div key={country.id} className={'country-card relative cursor-pointer'} onClick={()=>navigate(`/${continent.name}/${country.name}/destinations`)}>
                <img src={country.image} alt="image" className={'w-64 rounded aspect-square object-cover'}/>
                <span className={'flex gap-2 items-center absolute bottom-2 left-2 bg-white/60 text-black px-2 rounded'}><ImLocation/> {country.name}</span>
            </div>
        </div>
    );
};

export default CountryCard;