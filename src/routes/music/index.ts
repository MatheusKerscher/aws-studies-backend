import { Router } from "express";

import musicController from "@/controllers/music";

const musicRoutes = Router();

musicRoutes.get("/", musicController.getAllMusics);
musicRoutes.post("/", musicController.createMusic);

export default musicRoutes;
