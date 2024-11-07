export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
      },
      {
        name: 'percentage',
        title: 'Percentage',
        type: 'number',
      },
      {
        name: 'speed',
        title: 'Animation Speed',
        type: 'number',
      },
      {
        name: 'type',
        title: 'Skill Type',
        type: 'string',
        options: {
          list: [
            { title: 'Professional Skill', value: 'proSkill' },
            { title: 'Side Skill', value: 'sideSkill' },
          ],
        },
      },
    ],
  };
  