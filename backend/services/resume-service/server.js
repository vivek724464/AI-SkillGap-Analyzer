import "../../shared/config/loadEnv.js";
import app from "./app.js";
import { servicePorts } from "../../shared/config/serviceConfig.js";

app.listen(servicePorts.resume, () => {
  console.log(`Resume service is running on port ${servicePorts.resume}`);
});
