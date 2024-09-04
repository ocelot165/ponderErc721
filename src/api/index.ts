import { ponder } from "@/generated";
import { graphql } from "@ponder/core";

ponder.use("/", graphql());
ponder.use("/graphql", graphql());

ponder.get("/readiness", (c) => {
  return c.text("Ready");
});
