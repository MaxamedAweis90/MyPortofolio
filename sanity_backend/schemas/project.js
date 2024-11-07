export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Allows image cropping
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'technologies',
        type: 'array',
        title: 'Technologies',
        of: [{ type: 'reference', to: { type: 'technology' } }], // Refers to technology schema
        validation: Rule => Rule.min(1).required(),
      },
      {
        name: 'liveLink',
        type: 'url',
        title: 'Live Link',
      },
      {
        name: 'projectType',
        type: 'string',
        title: 'Project Type',
        options: {
          list: [
            { title: 'Real', value: 'Real' },
            { title: 'Hobby', value: 'Hobby' },
          ],
        },
        validation: Rule => Rule.required(),
      },
    ],
  };
  
