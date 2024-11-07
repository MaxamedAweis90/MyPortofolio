// proSkill.js
export default {
  name: 'proSkill',
  title: 'Pro Skill',
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
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'The order of the skill for display purposes',
    },
  ],
};
