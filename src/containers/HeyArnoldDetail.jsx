import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'
import { findCharacter } from '../services/HeyArnoldApi'
import CharacterDetail from '../components/characters/CharacterDetail'
import { useCharacter } from '../hooks/displayCharacters'

const HeyArnoldDetail = () => {
    const character = useCharacter(); 
    
    return <CharacterDetail name={character.name} image={character.image} />;
};

export default HeyArnoldDetail; 

