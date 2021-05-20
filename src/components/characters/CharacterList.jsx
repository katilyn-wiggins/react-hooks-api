import React from 'react'; 
import PropTypes from 'prop-types'; 
import Character from './Character'; 

const CharacterList = ({characters}) => ( 
        <ul aria-label="character-list"> 
            {characters.map((character) => (
            <li key={character.id}>
                <Character 
                id={character.id}
                name={character.name}
                image={character.image}
                />
                </li>
    ))}
    </ul>
    );

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired, 
        })
    ).isRequired,
}

export default CharacterList; 