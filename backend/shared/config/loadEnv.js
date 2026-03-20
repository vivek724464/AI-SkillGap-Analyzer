import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const currentFilePath = fileURLToPath(import.meta.url);
const sharedConfigDir = path.dirname(currentFilePath);
const backendRoot = path.resolve(sharedConfigDir, "..", "..");
const backendEnvPath = path.join(backendRoot, ".env");
const cwdEnvPath = path.resolve(process.cwd(), ".env");

config({ path: backendEnvPath });

if (cwdEnvPath !== backendEnvPath) {
  config({ path: cwdEnvPath, override: false });
}
