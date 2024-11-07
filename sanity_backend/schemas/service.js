// schemas/service.js
export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
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
        name: 'imgUrl',
        title: 'Image URL',
        type: 'image', // Use the image type for uploading images
        options: {
          hotspot: true, // Enables hotspot feature for cropping
        },
      },
      {
        name: 'iconImage',
        title: 'Icon Image',
        type: 'image', // Use the image type for uploading images
        options: {
          hotspot: true, // Enables hotspot feature for cropping
        },
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number', // Define the order as a number
      },
    ],
  };
  