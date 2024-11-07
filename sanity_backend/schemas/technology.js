export default {
    name: 'technology',
    type: 'document',
    title: 'Technology',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Technology Name',
        validation: Rule => Rule.required(),
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Technology Logo',
        options: {
          hotspot: true, // Allows image cropping
        },
        validation: Rule => Rule.required(),
      },
    ],
  };
  