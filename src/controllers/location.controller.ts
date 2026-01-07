import {Request, Response} from "express";

const location = (_req: Request, res: Response): void => {

    res.send('Listado de especies.');

}


const controller = {
    location
}

export default controller;