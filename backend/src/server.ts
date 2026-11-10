import path from "node:path";
import express from "express";
import { env } from "./config/index.js";
import { getCurrentPaths } from "./helpers/paths.js";
import { router } from "./routes/index.js";

const { _dirname } = getCurrentPaths(import.meta.url);
const publicDir = path.join(_dirname, "..", "public");

const app = express();

app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable("x-powered-by");

app.use(router);

app.use((req, res) => {
  res.status(500).json({ error: "ServerError" });
});

app.listen(env.port, () => {
  console.info("Server running at port:", env.port);
});
