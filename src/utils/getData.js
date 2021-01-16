const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => 
{
    
    // SI VIENE EL ID IR POR EL PERSONAJE SI NO IR POR TODOS LOS PERSONAJES
    const apiUrlData = id ? `${API}${id}` : API

    try 
    {
        // PETICION AL API
        const response = await fetch(apiUrlData)
        // CONVERTIR DATA A JSON
        const data = await response.json()

        return data

    }
    catch (error) 
    {
        throw new Error(error)
        // return new Error(error)
    }

}

export default getData