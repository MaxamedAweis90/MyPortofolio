// educationItem.js
export default {
    name: 'educationItem',
    title: 'Education Item',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Date',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'The order of the education item for display purposes',
      },
    ],
  };
  