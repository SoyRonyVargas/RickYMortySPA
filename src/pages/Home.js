import getData from "../utils/getData"

const Home = async () => 
{
    
    // OBTENEMOS LOS PERSONAJES 

    const characters = await getData()

    console.log(characters);

    const view = `
        <div class="Characters">
            ${
                characters.results.map( char => `
                <article class="Character-item">
                    <a href="#/${char.id}/">
                        <img src="${char.image}" alt="${char.name} - RickAndMortyApi" />
                        <h2> ${char.name} </h2>
                    </a>
                </article>
                `).join('')
            }
        </div>
    `

    return view
    
}

export default Home