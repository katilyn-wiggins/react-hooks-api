import React, { useEffect, useState } from 'react';
import { findCharacters, findCharacter } from '../services/HeyArnoldApi';
import { useParams } from 'react-router-dom';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};

export const useCharacter = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    findCharacter(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);

  return { loading, character };
};
