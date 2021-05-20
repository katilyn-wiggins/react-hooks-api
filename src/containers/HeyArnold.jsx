import React, { useState, useEffect } from 'react'; 
import { findCharacters } from '../services/HeyArnoldApi'
import CharacterList from '../components/characters/CharacterList'
import { useCharacters } from '../hooks/displayCharacters'

const HeyArnold = () => {
 const {loading, characters, page, next } = useCharacters(); 
 if (loading) return <h1>Loading...</h1>

    return (
    <section>
        <button onClick={next}>
            {page}
        </button>  
    <CharacterList characters={characters} />
    </section>
    );
};

export default HeyArnold; 