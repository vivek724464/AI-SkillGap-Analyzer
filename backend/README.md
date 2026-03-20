# Backend Microservices

The backend is organized into three runtime services:

- `api-gateway`: public HTTP entrypoint
- `auth-service`: user registration and login
- `resume-service`: resume upload and persistence

## Structure

```text
backend/
  api-gateway/
  prisma/
  services/
    auth-service/
    resume-service/
  shared/
```

## Local startup

Run each service in its own terminal from `backend/`:

```bash
npm run dev:auth
npm run dev:resume
npm run dev:gateway
```

The gateway keeps the external API stable on port `5000`.

## Ports

- `GATEWAY_PORT=5000`
- `AUTH_SERVICE_PORT=5001`
- `RESUME_SERVICE_PORT=5002`

If needed, service discovery can also be overridden with `AUTH_SERVICE_URL` and `RESUME_SERVICE_URL`.

## Current migration state

- Business capabilities are split by service boundary.
- Shared Prisma and JWT utilities live under `shared/` to keep the transition incremental.
- The database is still shared across services, which is a pragmatic first microservices step for this project.
