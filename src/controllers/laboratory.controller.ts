import { Request, Response } from 'express';
import db from '../models/sqlite.js';

const create = (_req: Request, res: Response) => {
    res.render('laboratory/create');
};

const locationPost = (req: Request, res: Response) => {
    try {
        const {
            name,
            status,
            species,
            type,
            gender,
            origin_name,
            origin_url,
            location_name,
            location_url,
            image,
            episode,
            url,
        } = req.body;

        const stmt = db.prepare(`
            INSERT INTO characters (
                name, status, species, type, gender, 
                origin_name, origin_url, 
                location_name, location_url, 
                image, episode, url, created
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        stmt.run(
            name,
            status || 'unknown',
            species || 'unknown',
            type || '',
            gender || 'unknown',
            origin_name || 'unknown',
            origin_url || '',
            location_name || 'unknown',
            location_url || '',
            image || '',
            episode || '[]',
            url || '',
            new Date().toISOString()
        );

        res.redirect('/api/laboratory');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el personaje.');
    }
};

const location = (_req: Request, res: Response) => {
    try {
        const characters = db.prepare('SELECT * FROM characters').all();
        res.render('laboratory/laboratory', { characters });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los personajes.');
    }
};

const locationById = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const resLocation = db
            .prepare('SELECT * FROM characters WHERE id = ?')
            .get(id);

        if (!resLocation) {
            return res.status(404).send('No existe el personaje.');
        }
        res.render('laboratory/laboratoryById', { resLocation });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el personaje.');
    }
};

const edit = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const resLocation = db
            .prepare('SELECT * FROM characters WHERE id = ?')
            .get(id);

        if (!resLocation) {
            return res.status(404).send('No existe el personaje.');
        }
        res.render('laboratory/edit', {
            location: Number(id),
            resLocation,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar edición.');
    }
};

const updateLocation = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {
            name,
            status,
            species,
            type,
            gender,
            origin_name,
            origin_url,
            location_name,
            location_url,
            image,
            episode,
            url,
        } = req.body;

        const stmt = db.prepare(`
            UPDATE characters 
            SET name = ?, status = ?, species = ?, type = ?, gender = ?, 
                origin_name = ?, origin_url = ?, 
                location_name = ?, location_url = ?, 
                image = ?, episode = ?, url = ?
            WHERE id = ?
        `);

        stmt.run(
            name,
            status,
            species,
            type,
            gender,
            origin_name,
            origin_url,
            location_name,
            location_url,
            image,
            episode,
            url,
            id
        );

        res.redirect('/api/laboratory');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar.');
    }
};

const locationDelete = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const stmt = db.prepare('DELETE FROM characters WHERE id = ?');
        const info = stmt.run(id);

        if (info.changes === 0) {
            return res.status(404).send('No existe el personaje.');
        }

        res.redirect(`/api/laboratory`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al borrar.');
    }
};

const controller = {
    locationPost,
    create,
    location,
    locationById,
    edit,
    updateLocation,
    locationDelete,
};

export default controller;
