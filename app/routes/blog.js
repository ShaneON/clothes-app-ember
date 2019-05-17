import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default Route.extend({
  // media: service(),

  setupController(controller) {
    this._super(...arguments);
    // controller.set('isMobile', this.media.isMobile),
    controller.set('header', "header")
    this._checkScroll(controller);
  },

  model() {
    return this.store.findAll('blog-post');
  },

  _checkScroll(controller) {
    window.addEventListener('scroll', (() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 90){
        controller.set('header', "sticky");
      }
      else {
        controller.set('header', "header");
      }
    }));
  },

  actions: {

    deleteBlogPost(blogPost) {
      blogPost.destroyRecord();
    },

    editBlogPost(blogPost) {
      this.transitionTo('blog.blog-post', blogPost.id);
    },

    newBlogPost() {
      let newBlogPost = this.store.createRecord('blog-post');
      newBlogPost.save().then((newBlogPost) => {
        this.transitionTo('blog.blog-post', newBlogPost.id);
      });
    },
  }
});
