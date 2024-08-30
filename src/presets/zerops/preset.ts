import { defineNitroPreset } from "nitropack/kit";

const zerops = defineNitroPreset(
  {
    extends: "node-server",
  },
  {
    name: "zerops" as const,
    url: import.meta.url,
  }
);

const zeropsStatic = defineNitroPreset(
  {
    extends: "static",
  },
  {
    name: "zerops-static" as const,
    url: import.meta.url,
    static: true,
  }
);


export default [zerops, zeropsStatic] as const;
