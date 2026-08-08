import type { Music } from "../../../infra/prisma/generated/prisma/client";
import { ValidationError } from "../../errors/validationError.ts";
import prisma from "../../lib/prisma.ts";
import type { CreateMusicProps } from "../../types/music/type";

const listAllMusics = async (): Promise<Music[]> => {
  try {
    return prisma.music.findMany();
  } catch (error) {
    throw error;
  }
};

const createMusic = async (requestInput: CreateMusicProps): Promise<void> => {
  try {
    const { name, author, spotify_link } = requestInput;

    if (!name || !author || !spotify_link) {
      throw new ValidationError({
        message:
          "Please provide all the necessary information to register the song.",
        action: "Please provide the name, author, and Spotify link.",
      });
    }

    await prisma.music.create({
      data: {
        name,
        author,
        spotify_link,
      },
    });
  } catch (error) {
    throw error;
  }
};

const musicService = {
  listAllMusics,
  createMusic,
};

export default musicService;
