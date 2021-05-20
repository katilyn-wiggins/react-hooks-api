import React, { useState, useEffect } from 'react'; 
import { findCharacters } from '../services/HeyArnoldApi'
import CharacterList from '../components/characters/CharacterList'

const HeyArnold = () => {
    const [loading, setLoading] = useState(true); 
    const [characters, setCharacters] = useState([]); 

    useEffect(() => {
        findCharacters() 
        .then(setCharacters)
        .finally(() => setLoading(false)); 
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return <CharacterList characters={characters} />;
};

export default HeyArnold; 