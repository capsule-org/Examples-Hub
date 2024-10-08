import { routes } from "./routes";

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

Bun.serve({
  async fetch(req: Request) {
    const path = new URL(req.url).pathname;
    for (const route of routes) {
      if (route.path === path && req.method === route.method) {
        return await route.handler(req);
      }
    }
    return defaultHandler(req);
  },
  port: 8000,
});
