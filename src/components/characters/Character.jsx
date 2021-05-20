import React from 'react'; 
import PropTypes from 'prop-types'; 
import {BrowserRouter as Router, Link } from 'react-router-dom'; 

const Character = ({ id, name, image }) => ( 
       <Link to={`/${id}`}>
            <img src={image} alt={name} /> 
            <p>{name}</p>
        </Link>
    );

Character.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired 
}

export default Character;
