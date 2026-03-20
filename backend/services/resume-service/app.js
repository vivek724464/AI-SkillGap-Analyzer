import { createServiceApp } from "../../shared/express/createServiceApp.js";
import { errorHandler } from "../../shared/utils/errorHandler.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = createServiceApp("resume-service");

app.use("/api/resumes", resumeRoutes);
app.use(errorHandler);

export default app;
