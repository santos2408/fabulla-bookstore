import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

type Response = {
  _filename: string;
  _dirname: string;
};

export function getCurrentPaths(url: string): Response {
  const _filename = fileURLToPath(url);
  const _dirname = dirname(_filename);
  return { _filename, _dirname };
}
