import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('gallery', function() {
    this.route('image-upload');
    this.route('image', { path: 'image/:image_id'});
  });
  this.route('blog');
  this.route('admin');
  this.route('contact');
});

export default Router;
