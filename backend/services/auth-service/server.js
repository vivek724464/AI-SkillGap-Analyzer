import "../../shared/config/loadEnv.js";
import app from "./app.js";
import { servicePorts } from "../../shared/config/serviceConfig.js";

app.listen(servicePorts.auth, () => {
  console.log(`Auth service is running on port ${servicePorts.auth}`);
});
