import type { Request, Response } from "express";

import type { CreateMusicProps } from "@/types/music/type";
import musicService from "@/services/music";

const getAllMusics = async (req: Request, res: Response) => {
  try {
    const musics = await musicService.listAllMusics();
    return res.status(200).json(musics);
  } catch (error) {
    throw error;
  }
};

const createMusic = async (
  req: Request<{}, {}, CreateMusicProps>,
  res: Response,
) => {
  try {
    const createMusicParams = req.body;
    await musicService.createMusic(createMusicParams);

    return res.status(201).json({
      message: "Song created.",
    });
  } catch (error) {
    throw error;
  }
};

const musicController = {
  getAllMusics,
  createMusic,
};

export default musicController;
