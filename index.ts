import app from "./src/app.ts";

const port = process.env.EXPRESS_PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
