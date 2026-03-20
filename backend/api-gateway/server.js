import "../shared/config/loadEnv.js";
import app from "./app.js";
import { servicePorts } from "../shared/config/serviceConfig.js";

app.listen(servicePorts.gateway, () => {
  console.log(`API gateway is running on port ${servicePorts.gateway}`);
});
