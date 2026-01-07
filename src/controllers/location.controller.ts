import {Request, Response} from "express";

const location = (_req: Request, res: Response): void => {

    res.render('location/location');

}


const controller = {
    location
}

export default controller;