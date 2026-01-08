import { Request, Response } from "express";
import { locations } from "../data/location.data.js";

const create = (_req: Request, res: Response) => {
  res.render("location/create");
};

const locationPost = (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const location = {
      id: Date.now(),
      name,
    };

    // TODO: sacar el any salvaje de aquí y typar como debe ser cuando este con una db
    locations.push(location as any);

    res.redirect("/api/location");
  } catch (error) {
    console.error(error);
  }
};

const location = (_req: Request, res: Response) => {
  res.render("location/location", { locations });
};

const locationById = (req: Request, res: Response) => {
  const { id } = req.params;
  const resLocation = locations.find((location) => location.id === Number(id));
  //console.log(resLocation);

  if (!resLocation) {
    return res.status(404).send("No existe la localización.");
  }
  res.render("location/locationById", { resLocation });
};

const controller = {
  locationPost,
  create,
  location,
  locationById,
};

export default controller;
