import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import Personaje from "./src/models/Personaje.js"
import Peliculas from "./src/models/Peliserie.js"
const app = express()
const port = 3001

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPeliculaById = async() => JSON.stringify(await new PeliculasService().getById(id))

const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
const getPersonajeById = async() => JSON.stringify(await new PersonajeService().getById(id))
const getPersonajeByAge = async() => JSON.stringify(await new PersonajeService().getPersonajesPORedad(edad))
const getPersonajeByName = async() => JSON.stringify(await new PersonajeService().getPersonajesPORnombre(nombre))



app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})


let personaje = new Personaje()
personaje = {Nombre : "Hanz landa", Imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/06/20/hans-landa.jpeg", Edad: "46", Peso: "70", Historia: "Nazi", peliserie: "breaking bad"}

let Kitty = new Personaje()
Kitty = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty', edad:10,peso:15,historia:'es un gato',peliserie:'Hello Kitty' }

let KittyDOS = new Personaje()
KittyDOS = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty EL GATO', edad:10,peso:15,historia:'es un gato FELIZ',peliserie:'Hello Kitty :)' }

let HelloKitty = new Peliculas
HelloKitty = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty', calificacion:'10', PersonajesAsociados: '10'}

let HelloKittyDOS = new Peliculas
HelloKittyDOS = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty DOS', calificacion:'9', PersonajesAsociados: '10'}

////////////////Personajes//////////////////
app.get('/characters', async(req, res) => res.send(personajes(await getPersonajes())))

app.get('/characters/:nombre', async(req, res) => res.send(await getPersonajeByName(req.params.nombre)))
app.get('/characters/:edad', async(req, res) => res.send(await getPersonajeByAge(req.params.edad)))
app.get('/characters/:id', async(req, res) => res.send(await getPersonajeById(req.params.id)))


async function AddPersonaje(PersonajeNuevo){
    let svc = new PersonajeService()
    let data
    data = await svc.insert(PersonajeNuevo)
    console.log(data)
}
AddPersonaje(Kitty)

async function UpdatePersonaje(personajeModificado){
    let svc = new PersonajeService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
UpdatePersonaje(KittyDOS)

async function deleteByIdPersonaje(id){
    let svc = new PersonajeService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
deleteByIdPersonaje(6)

////////////////PELICULAS//////////////////
app.get('/movies', async(req, res) => res.send(await getPeliculas()))

app.get('/movies/:id', async(req, res) => res.send(await getPeliculaById(req.params.id)))

async function AddPelicula(PeliculaNueva){
    let svc = new PeliculasService()
    let data
    data = await svc.insert(PeliculaNueva)
    console.log(data)
}
AddPelicula(HelloKitty)

async function UpdatePelicula(peliculaModificada){
    let svc = new PeliculasService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
UpdatePelicula(HelloKittyDOS)

async function deleteByIdPelicula(id){
    let svc = new PeliculasService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
deleteByIdPelicula(6)
