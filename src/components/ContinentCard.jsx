import {ImLocation} from 'react-icons/im'
import {useNavigate} from "react-router-dom";

const ContinentCard = ({continent}) => {
    const navigate = useNavigate()

    return (
        <div key={continent.id} className={'continent-card relative cursor-pointer'} onClick={()=>navigate(`/${continent.name}/countries`)}>
            <img src={continent.image} alt="image" className={'w-64 rounded aspect-square object-cover'}/>
            <span className={'flex gap-2 items-center absolute bottom-2 left-2 bg-white/60 text-black px-2 rounded'}><ImLocation/> {continent.name}</span>
        </div>
    );
};

export default ContinentCard;