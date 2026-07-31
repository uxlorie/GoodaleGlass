import { defineField, defineType } from "sanity";

export const customOrderInquiry = defineType({
  name: "customOrderInquiry",
  title: "Custom Order Inquiry",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "pieceDescription",
      title: "Piece Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dimensions",
      title: "Desired Dimensions",
      type: "string",
    }),
    defineField({
      name: "colors",
      title: "Colors / Style",
      type: "string",
    }),
    defineField({
      name: "budgetRange",
      title: "Budget Range",
      type: "string",
    }),
    defineField({
      name: "timeline",
      title: "Desired Timeline",
      type: "string",
    }),
    defineField({
      name: "referenceImages",
      title: "Reference Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "In Progress", value: "in-progress" },
          { title: "Completed", value: "completed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "email",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} — ${status}`,
      };
    },
  },
});
