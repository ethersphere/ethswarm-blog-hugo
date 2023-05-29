import { defineConfig } from "tinacms";
import { homeFields } from "./templates";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.TINA_BRANCH ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "featured_blog",
            label: "Featured from Blog",
            options: ["foundation", "hive", "fds", "wam"],
            required: true,
          },
          {
            type: "string",
            name: "featured",
            label: "Featured",
            required: true,
          },
          {
            type: "string",
            name: "featured_secondary_first_blog",
            label: "Featured Secondary First from Blog",
            options: ["foundation", "wam", "fds", "hive"],
            required: true,
          },
          {
            type: "string",
            name: "featured_secondary_first",
            label: "Featured Secondary First",
            required: true,
          },
          {
            type: "string",
            name: "featured_secondary_second_blog",
            label: "Featured Secondary Second from Blog",
            options: ["foundation", "hive", "fds", "wam"],
            required: true,
          },
          {
            type: "string",
            name: "featured_secondary_second",
            label: "Featured secondary Second",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Swarm Foundation",
        name: "swarm_foundation",
        path: "content/foundation/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "FDS",
        name: "fds",
        path: "content/fds/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "Swarm Hive",
        name: "swarm_hive",
        path: "content/hive/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "WAM",
        name: "wam",
        path: "content/wam/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
    ],
  },
});
