import express from "express";
import type { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import type { Route } from "./routes";

const app = express();
const port = 8000;

app.use(express.json());

routes.forEach((route: Route) => {
  app[route.method.toLowerCase() as "post"](route.path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await route.handler(req, res, next);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
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
