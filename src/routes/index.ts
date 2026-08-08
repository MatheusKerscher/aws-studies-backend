import { Router } from "express";
import musicRoutes from "./music/index.ts";

const routes = Router();

routes.use("/musics", musicRoutes);

export default routes;
