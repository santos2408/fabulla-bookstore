export type environments = "production" | "development";

export type Env = {
  environment: environments;
  port: string | number;
  secret: string;
  api: string;
  client: string;
};
