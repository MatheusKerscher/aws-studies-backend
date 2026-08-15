import { Router } from "express";
import musicRoutes from "./music";

const routes = Router();

routes.use("/musics", musicRoutes);

export default routes;
