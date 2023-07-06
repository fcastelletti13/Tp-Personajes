import express from "express"
import cors from "cors"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
console.clear()
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

const port = 3001

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPeliculaById = async(id) => JSON.stringify(await new PeliculasService().getById(id))

const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
const getPersonajeById = async(id) => JSON.stringify(await new PersonajeService().getById(id))
const getPersonajeByAge = async(Edad) => JSON.stringify(await new PersonajeService().getPersonajesPORedad(Edad))
const getPersonajeByName = async(Nombre) => JSON.stringify(await new PersonajeService().getPersonajesPORnombre(Nombre))



app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})
////////////////Personajes//////////////////
app.get('/characters', async(req, res) => res.send(await getPersonajes()))

app.get('/charactersname/:nombre', async(req, res) => res.send(await getPersonajeByName(req.params.nombre)))
app.get('/charactersage/:edad', async(req, res) => res.send(await getPersonajeByAge(req.params.edad)))
app.get('/charactersid/:id', async(req, res) => res.send(await getPersonajeById(req.params.id)))

const putPersonaje = async(personaje) => JSON.stringify(await new PersonajeService().insert(personaje))
//AddPersonaje()
/*{"id": 2000,"nombre": "Hola","imagen": "url","edad":  12,"peso": 35,"historia": "url","idPeliculaSerie": "aaa"} */
app.put('/character', async(req, res) => {
    let rowsAffected = 0;
    try {
        await putPersonaje(req.body);
        res.status(200).send("Correct Insert");
    } catch (error) {
        res.status(400).send(error)
    }
});

const updatePersonaje = async(personaje) => JSON.stringify(await new PersonajeService().update(personaje))
//UpdatePersonaje()
app.put('/characteru', async(req, res) => {
    let rowsAffected = 0;
    try {
        await updatePersonaje(req.body);
        res.status(200).send("Correct Update");
    } catch (error) {
        res.status(400).send(error)
    }
});

const deletePersonaje = async(id) => JSON.stringify(await new PersonajeService().deleteById(id))
//deleteByIdPersonaje()
app.delete('/character/:id', async(req, res) => {
    let rowsAffected = 0;
    try {
        await deletePersonaje(req.params.id);
        res.status(200).send("Correct Delete");
    } catch (error) {
        res.status(400).send(error)
    }
});


////////////////PELICULAS//////////////////
app.get('/movies', async(req, res) => res.send(await getPeliculas()))

app.get('/movies/:id', async(req, res) => res.send(await getPeliculaById(req.params.id)))

const putPelicula = async(pelicula) => JSON.stringify(await new PeliculasService().insert(pelicula))
//AddPelicula()
app.put('/movie', async(req, res) => {
    let rowsAffected = 0;
    try {
        await putPelicula(req.body);
        res.status(200).send("Correct Insert");
    } catch (error) {
        res.status(400).send(error)
    }
});

const updatePelicula = async(pelicula) => JSON.stringify(await new PeliculasService().update(pelicula))
//UpdatePelicula()
app.put('/movieu', async(req, res) => {
    let rowsAffected = 0;
    try {
        await updatePelicula(req.body);
        res.status(200).send("Correct Update");
    } catch (error) {
        res.status(400).send(error)
    }
});

const deletePelicula = async(id) => JSON.stringify(await new PeliculasService().deleteById(id))
//deleteByIdPelicula()
app.put('/movie/:id', async(req, res) => {
    let rowsAffected = 0;
    try {
        await deletePelicula(req.params.id);
        res.status(200).send("Correct Delete");
    } catch (error) {
        res.status(400).send(error)
    }
});
