import express from "express";
import type { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import type { Route } from "./routes";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = 8000;

app.use(express.json());

routes.forEach((route: Route) => {
  app[route.method.toLowerCase() as "get" | "post" | "put" | "delete"](
    route.path,
    (req: Request, res: Response, next: NextFunction) => {
      route.handler(req, res, next).catch(next);
    }
  );
});

app.use((_req: Request, res: Response) => {
  res.status(404).send("Not found");
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
