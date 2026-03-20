export const servicePorts = {
  gateway: Number(process.env.GATEWAY_PORT ?? 5000),
  auth: Number(process.env.AUTH_SERVICE_PORT ?? 5001),
  resume: Number(process.env.RESUME_SERVICE_PORT ?? 5002),
};

export const serviceUrls = {
  auth: process.env.AUTH_SERVICE_URL ?? `http://localhost:${servicePorts.auth}`,
  resume: process.env.RESUME_SERVICE_URL ?? `http://localhost:${servicePorts.resume}`,
};
