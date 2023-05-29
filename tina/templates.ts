import type { TinaField } from "tinacms";
export function homeFields() {
  return [
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
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "banner",
      label: "Banner",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "references_and_footnotes",
      label: "References and footnotes",
      list: true,
    },
  ] as TinaField[];
}
