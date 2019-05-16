export default function() {

  this.get('http://localhost:3001/images/:image_id', () => {
    return {
      id: 1,
      name: 'Image 1',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 1'
    };
  });

  this.get('http://localhost:3001/images', () => {
    return [{
      id: 1,
      name: 'Image 1',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 1'
    },
    {
      id: 2,
      name: 'Image 2',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 2'
    },
    {
      id: 3,
      name: 'Image 3',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 3'
    },
    {
      id: 4,
      name: 'Image 4',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 4'
    },
    {
      id: 5,
      name: 'Image 5',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 5'
    },
    {
      id: 6,
      name: 'Image 6',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 6'
    },
    {
      id: 7,
      name: 'Image 7',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 7'
    },
    {
      id: 8,
      name: 'Image 8',
      url: 'https://clothes-images.s3.eu-west-1.amazonaws.com/1557937106677',
      caption: 'This is image 8'
    }]
  });

  this.get('http://localhost:3001/blog-posts', () => {
    return [{
      id: 1,
      title: 'Blog 1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 2,
      title: 'Blog 2',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 3,
      title: 'Blog 3',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      id: 4,
      title: 'Blog 4',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }]
  });

  this.post('http://localhost:3001/blog-post', () => {
    return {
      id: 5,
      title: 'Blog 5',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
