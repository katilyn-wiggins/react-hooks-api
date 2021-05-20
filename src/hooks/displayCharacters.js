import React, { useEffect, useState } from 'react';
import { findCharacters, findCharacter } from '../services/HeyArnoldApi';
import { useParams } from 'react-router-dom';

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  function next() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    findCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { loading, characters, page, next };
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
