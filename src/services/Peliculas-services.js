import sql from 'mssql';
import config from '../../dbconfig-env.js';

class PeliculasService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: PeliculasService.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT * from PeliculaSerie");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PeliculasService.getById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM PeliculaSerie WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (pelicula) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculasService.insert(pelicula)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pFechaCreacion', sql.Date, new Date().now)
            .query(`INSERT INTO PeliculaSerie (Titulo, Imagen, Calificacion, FechaCreacion, PersonajesAsociados)
            VALUES ('${pelicula.Titulo}', '${pelicula.Imagen}', ${pelicula.Calificacion}, @pFechaCreacion, '${pelicula.PersonajesAsociados}')`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (pelicula) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculasService.update(pelicula)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pFechaCreacion', sql.Date, pelicula.FechaCreacion)
                .query(`UPDATE PeliculaSerie SET 
                Titulo = '${pelicula.Titulo}',
                Imagen = '${pelicula.Imagen}',
                Calificacion = ${pelicula.Calificacion},
                FechaCreacion = @pFechaCreacion,
                PersonajesAsociados = '${pelicula.PersonajesAsociados}'
                WHERE IDd = ${pelicula.id}`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculasService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('DELETE FROM PeliculaSerie WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PeliculasService;
