import getData from "../utils/getData"
import getHash from "../utils/getHash"

const Characters = async () => {


    // OBTENEMOS EL ID ACTUAL
    const id = getHash()

    // HACEMOS LA PETICION

    const char = await getData(id)

    console.log(char);

    return `
        <div class="characters__inner">
            <article class="characters__card">
                <img src="${char.image}" alt="${char.name} - RickAndMortyApi" />
                <h2>${char.name}</h2>
            </article>
            <article class="charactes__card">
                <h3>Episodes: ${char.episode.length} </h3>
                <h3>Status: ${char.status} </h3>
                <h3>Species: ${char.species} </h3>
                <h3>Gender: ${char.gender} </h3>
                <h3>Origin: ${char.origin.name} </h3>
                <h3>Last Location: ${char.location.name} </h3>
            </article>
        </div>
    `
}

export default Characters
