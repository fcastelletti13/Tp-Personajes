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


let personaje = {nombre : "Hanz landa", imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/06/20/hans-landa.jpeg", edad: "46", peso: "70", historia: "Nazi", idPeliculasSerie: "breaking bad"}

let Kitty = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty', edad:10,peso:15,historia:'es un gato', idPeliculasSerie:'Hello Kitty' }

let KittyDOS = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty EL GATO', edad:10,peso:15,historia:'es un gato FELIZ', idPeliculasSerie:'Hello Kitty :)' }

let HelloKitty = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty', calificacion:'10', personajesAsociados: '10'}

let HelloKittyDOS = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty DOS', calificacion:'9', personajesAsociados: '10'}

////////////////Personajes//////////////////
app.get('/characters', async(req, res) => res.send(await getPersonajes()))

app.get('/charactersname/:nombre', async(req, res) => res.send(await getPersonajeByName(req.params.nombre)))
app.get('/charactersage/:edad', async(req, res) => res.send(await getPersonajeByAge(req.params.edad)))
app.get('/charactersid/:id', async(req, res) => res.send(await getPersonajeById(req.params.id)))


async function AddPersonaje(PersonajeNuevo){
    let svc = new PersonajeService()
    let data
    data = await svc.insert(PersonajeNuevo)
    console.log(data)
}
//AddPersonaje(Kitty)

async function UpdatePersonaje(personajeModificado){
    let svc = new PersonajeService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
//UpdatePersonaje(KittyDOS)

async function deleteByIdPersonaje(id){
    let svc = new PersonajeService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
//deleteByIdPersonaje(6)

////////////////PELICULAS//////////////////
app.get('/movies', async(req, res) => res.send(await getPeliculas()))

app.get('/movies/:id', async(req, res) => res.send(await getPeliculaById(req.params.id)))

async function AddPelicula(PeliculaNueva){
    let svc = new PeliculasService()
    let data
    data = await svc.insert(PeliculaNueva)
    console.log(data)
}
//AddPelicula(HelloKitty)

async function UpdatePelicula(peliculaModificada){
    let svc = new PeliculasService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
//UpdatePelicula(HelloKittyDOS)

async function deleteByIdPelicula(id){
    let svc = new PeliculasService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
//deleteByIdPelicula(6)
