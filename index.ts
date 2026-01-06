import dotenv from "dotenv";

dotenv.config();

import mainRouter from "./src/routes/main.router";
import rickAndMortyRouter from "./src/routes/rickAndMorty.router";
import path from "node:path";
import expressEjsLayouts from "express-ejs-layouts";

import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(process.cwd(), "public")));


app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(expressEjsLayouts);
app.set('layout', "layouts/layout");

app.use(mainRouter);
app.use('/api/characters', rickAndMortyRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})