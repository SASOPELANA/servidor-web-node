import { Request, Response } from 'express';
import db from '../models/sqlite.js';
import { Character, CharacterRow } from '../types/Character.types.js';

/**
 * Maps a flat database row to the nested Character object structure.
 */
const characterMapper = (row: CharacterRow): Character => {
    let episode: string[] = [];
    try {
        const parsed = JSON.parse(row.episode || '[]');
        episode = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
        episode = row.episode ? [row.episode] : [];
    }

    return {
        id: row.id,
        name: row.name,
        status: row.status,
        species: row.species,
        type: row.type,
        gender: row.gender,
        origin: {
            name: row.origin_name,
            url: row.origin_url,
        },
        location: {
            name: row.location_name,
            url: row.location_url,
        },
        image: row.image,
        episode,
        url: row.url,
        created: row.created,
    };
};

const getCharacters = async (req: Request, res: Response) => {
    try {
        const rows = db
            .prepare('SELECT * FROM characters')
            .all() as CharacterRow[];
        const results = rows.map(characterMapper);

        res.render('characters', { characters: { results } });
    } catch (e) {
        console.error(e);
        res.status(404).json({ error: 'Algo salio mal', e });
    }
};

const getByIdCharacter = async (req: Request, res: Response) => {
    try {
        const row = db
            .prepare('SELECT * FROM characters WHERE id = ?')
            .get(req.params.id) as CharacterRow | undefined;

        if (!row) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }

        const character = characterMapper(row);
        res.status(200).json(character);
    } catch (e) {
        res.status(404).json({ error: 'Error al obtener caracter por id', e });
    }
};

const controller = {
    getCharacters,
    getByIdCharacter,
};

export default controller;
