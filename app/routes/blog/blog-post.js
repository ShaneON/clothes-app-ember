import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.find('blog-post', params.post_id);
  },

  actions: {
    closeModal() {
      this.transitionTo('blog');
    },

    updateBlogPost(blogPost) {
      blogPost.save();
    }
  }
});
