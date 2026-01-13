import dotenv from 'dotenv';
dotenv.config();

import mainRouter from './src/routes/main.route.js';
import rickAndMortyRouter from './src/routes/characters.route.js';
import contact from './src/routes/contact.route.js';
import locationRoute from './src/routes/laboratory.route.js';
import path from 'node:path';
import expressEjsLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src/views'));

app.use(expressEjsLayouts);
app.set('layout', 'layouts/layout');

app.use(mainRouter);
app.use('/api/characters', rickAndMortyRouter);
app.use('/api/contact', contact);
app.use('/api/laboratory', locationRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
