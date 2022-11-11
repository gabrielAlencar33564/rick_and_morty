import { IResults } from '../../context/interfaces';

export const Card = ({ image, name, origin, species, status }: IResults) => {

    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            
            <span>{origin.name} - {species}</span>
        </li>
    )
}