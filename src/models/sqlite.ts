import path from 'node:path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: Database.Database;

try {
    db = new Database(path.resolve(__dirname, '../../database.db'));

    const sql = `
    CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        status TEXT CHECK (status IN ('Alive', 'Dead', 'unknown')) NOT NULL,
        species TEXT NOT NULL,
        type TEXT,
        gender TEXT CHECK (gender IN ('Female', 'Male', 'Genderless', 'unknown')) NOT NULL,

        origin_name TEXT NOT NULL,
        origin_url TEXT,

        location_name TEXT NOT NULL,
        location_url TEXT,

        image TEXT,
        episode TEXT,
        url TEXT,
        created TEXT
    );
    `;

    db.exec(sql);
} catch (error) {
    console.error('Error inicializando SQLite:', error);
    process.exit(1);
}

export default db!;
