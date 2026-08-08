import dotenv from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig } from "prisma/config";

const env = dotenv.config();
expand(env);

export default defineConfig({
  schema: "infra/prisma/schema.prisma",
  migrations: {
    path: "infra/prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
