export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "serial",
      title: "Serial",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Serial",
      name: "serial",
      by: [{ field: "serial", direction: "asc" }],
    },
  ],
};
