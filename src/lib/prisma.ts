import dotenv from "dotenv";
import { expand } from "dotenv-expand";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../infra/prisma/generated/prisma/client.ts";

const env = dotenv.config();
expand(env);

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
