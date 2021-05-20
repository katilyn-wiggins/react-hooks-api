import React, { useState, useEffect } from 'react'; 
import { findCharacters } from '../services/HeyArnoldApi'
import CharacterList from '../components/characters/CharacterList'
import { useCharacters } from '../hooks/displayCharacters'

const HeyArnold = () => {
 const {loading, characters} = useCharacters(); 
 if (loading) return <h1>Loading...</h1>

    return <CharacterList characters={characters} />;
};

export default HeyArnold; 