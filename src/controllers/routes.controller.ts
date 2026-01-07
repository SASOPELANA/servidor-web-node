import {Request, Response} from "express";
import axios from "axios";
import {CharactersResponse} from "../types/rickAndMortyDates.types.js";
//import * as querystring from "node:querystring";


// métodos get all, search and query
const getCharacters = async (req: Request, res: Response) => {

    // la método params: req.query --> de axios es una alternativa al querystring nativo de node.js
    // axios serializa automáticamente req.query como query params


    try {

        const {data} = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character', {params: req.query});
        //res.status(200).json(data);
        //console.log(data.results[0].origin);
        res.render('characters', {characters: data});

    } catch (e) {
        console.error(e);
        res.status(404).json({error: 'Algo salio mal', e});
    }
}


const getByIdCharacter = async (req: Request, res: Response) => {
    try {
        const {data} = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character/' + req.params.id)
        res.status(200).json(data);
        //console.log(data);

    } catch (e) {
        res.status(404).json({error: 'Error al obtener caracter por id', e});
    }
}

const controller = {
    getCharacters,
    getByIdCharacter,
}

export default controller;