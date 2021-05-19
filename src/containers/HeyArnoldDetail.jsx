import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'
import { findCharacters } from '../services/HeyArnoldApi'
import CharacterDetail from '../components/characters/CharacterDetail'

const HeyArnoldDetail = () => {
    const [loading, setLoading] = useState(true); 
    const [characters, setCharacters] = useState([]); 
    let { id } = useParams(); 

    useEffect(() => {
        findCharacters(id) 
        .then(setCharacters)
        .finally(() => setLoading(false)); 
    }, [id]);

    if (loading) return <h1>Loading...</h1>;

    return <CharacterDetail name={characters.name} image={characters.image} />;
};

export default HeyArnoldDetail; 