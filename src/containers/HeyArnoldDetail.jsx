import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'
import { findCharacter } from '../services/HeyArnoldApi'
import CharacterDetail from '../components/characters/CharacterDetail'

const HeyArnoldDetail = () => {
    const [loading, setLoading] = useState(true); 
    const [character, setCharacter] = useState({}); 
    console.log('in hey arnold detail')

    let {id} = useParams(); 
    console.log({id}); 

    useEffect(() => {
        findCharacter(id) 
        .then(setCharacter)
        .finally(() => setLoading(false)); 
    }, []);

    if (loading) return <h1>Loading...</h1>;
    console.log(character);
    return <CharacterDetail name={character.name} image={character.image} />;
};

export default HeyArnoldDetail; 