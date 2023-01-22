export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [
        {
          type: "string",
         
        }
      ],
     
    },
  ],
};
