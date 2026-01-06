import {Request, Response} from "express";
import path from "node:path";
import {dirname} from "node:path";
import {fileURLToPath} from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const index = (_req: Request, res: Response) => {
    //console.log(__dirname)
    res.render("index");
}

const privates = (_req: Request, res: Response) => {
    //console.log(__dirname)
    res.sendFile(path.join(__dirname, "../../private/index.html"));
}


const controller = {
    index,
    privates
}

export default controller;