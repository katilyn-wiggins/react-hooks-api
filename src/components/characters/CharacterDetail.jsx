import React from 'react'; 
import PropTypes from 'prop-types' 

const CharacterDetail = ({name, image}) => (
        <figure>
            <img src={image} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
)

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,  
    image: PropTypes.string.isRequired
}

export default CharacterDetail; 




