import express from "express";
import type { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import type { Route } from "./routes";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(express.json());

/**
 * Register routes from the routes array.
 */
const registerRoutes = (routes: Route[]): void => {
  routes.forEach((route: Route) => {
    app[route.method.toLowerCase() as "get" | "post" | "put" | "delete"](
      route.path,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await route.handler(req, res, next);
        } catch (error) {
          next(error);
        }
      }
    );
  });
};

registerRoutes(routes);

/**
 * Handle requests that don't match any defined routes (404 Not Found).
 */
app.use((_req: Request, res: Response) => {
  res.status(404).send("Not found");
});

/**
 * Error handling middleware for server errors.
 */
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Internal server error:", err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
