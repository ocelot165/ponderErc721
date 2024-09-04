import { ponder } from "@/generated";
import { graphql } from "@ponder/core";

const app = ponder.hono.basePath(process.env.BASE_PATH!);

app.use("/", graphql());
app.use("/graphql", graphql());

app.get("/readiness", (c) => {
  return c.text("Ready");
});
