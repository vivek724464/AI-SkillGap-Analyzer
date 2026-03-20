import { createServiceApp } from "../shared/express/createServiceApp.js";
import { createProxyMiddleware } from "./proxy/createProxyMiddleware.js";

const app = createServiceApp("api-gateway");

app.get("/", (req, res) => {
  res.json({
    service: "api-gateway",
    message: "AI Skill Analyzer microservices gateway",
  });
});

app.use("/api/auth", createProxyMiddleware("auth"));
app.use("/api/resumes", createProxyMiddleware("resume"));

export default app;
