export const findCharacters = async (page) => {
    const res = await fetch(
        `https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=${page}`
    );
    const results = await res.json(); 

    return results.map((character) => ({
        id: character._id, 
        name: character.name, 
        image: character.image
    }));
}

export const findCharacter = async (id) => {
    const res = await fetch(
        `https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`
    );
    const results = await res.json(); 
    return results; 
}