import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express, { Express, Request, Response, NextFunction } from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function _createServer() {
  const app: Express = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  // app.use("*", async (req: Request, res: Response, next) => {
  //   const url = req.originalUrl;

  //   try {
  //     let template = fs.readFileSync(
  //       path.resolve(__dirname, "index.html"),
  //       "utf-8"
  //     );

  //     template = await vite.transformIndexHtml(url, template);
  //     const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  //     const appHtml = await render(url);
  //     const html = template.replace(`<!--ssr-outlet-->`, appHtml);

  //     res.status(200).set({ "Content-Type": "text/html" }).end(html);
  //   } catch (e) {
  //     vite.ssrFixStacktrace(e);
  //     next(e);
  //   }
  // });

  // const renderer = async (req: Request, res: Response) => {
  //   try {
  //     const render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
  //     render(req, res, `/src/entry-client.tsx`);
  //   } catch (err) {
  //     const e = err as Error;
  //     vite.ssrFixStacktrace(e);
  //     console.log(e.stack);
  //     res.status(500).end(e.stack);
  //   }
  // };
  // app.use("*", renderer);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;

      await render(url, res);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  // app.use("*", async (req: Request, res: Response, next: NextFunction) => {
  //   const url = req.originalUrl;
  //   try {
  //     let template = fs.readFileSync(
  //       path.resolve(__dirname, "index.html"),
  //       "utf-8"
  //     );
  //     template = await vite.transformIndexHtml(url, template);

  //     const parts = template.split("<!--app-html-->");

  //     const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  //     const [{ pipe }, store] = await render(url, {
  //       onShellReady() {
  //         console.log("Test test");
  //         res.write(parts[0]);
  //         pipe(res);
  //       },
  //       onAllReady() {
  //         res.write(
  //           parts[1] +
  //             `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
  //               store.getState()
  //             ).replace(/</g, "\\u003c")}</script>`
  //         );
  //         res.end();
  //       },
  //     });
  //   } catch (err) {
  //     const e = err as Error;
  //     vite.ssrFixStacktrace(e);
  //     next(e);
  //   }
  // });

  app.listen(5173, () => console.log(`listening on http://localhost:5173`));
}

_createServer();
