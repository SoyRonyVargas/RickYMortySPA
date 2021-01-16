import Characters from "../pages/Characters";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// RUTAS DE LA APLICACIÓN

const routes = {
    '/': Home,
    '/home': Home,
    '/:id': Characters,
    '/contact': 'Contact'
}

const Router = async () =>
{
    
    // ELEMENTOS DEL DOM

    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')

    // RENDERIZAMOS EL HEADER

    header.innerHTML = await Header()
    // footer.innerHTML = await Footer()

    // DEVUELVE SI HAY HASH
    let hash = getHash()
    // NO SE QUE HACE AUN
    let route = await resolveRoutes(hash)
    console.log(route);
    console.log('xd');
    // BUSCAMOS LA RUTA CON BRACKET NOTATION
    let render = routes[route] ? routes[route] : Error404

    content.innerHTML = await render()

}

export default Router