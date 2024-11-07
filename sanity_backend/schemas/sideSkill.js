// sideSkill.js
export default {
  name: 'sideSkill',
  title: 'Side Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
    },
    {
      name: 'percentage',
      title: 'Skill Percentage',
      type: 'number',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'The order of the skill for display purposes',
    },
  ],
};
