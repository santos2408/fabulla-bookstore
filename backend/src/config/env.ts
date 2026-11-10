import type { Env, environments } from "./index.js";

export const env: Env = {
  environment: (process.env.NODE_ENV as environments) || "development",
  port: process.env.PORT || "4001",
  secret: process.env.SECRET || "xBbnN(Ym[Ef#r.~:U[7</WMZu5W3]J<m",
  api: `http://localhost:${process.env.PORT}`,
  client: `http://localhost:${process.env.PORT_CLIENT}`,
};
