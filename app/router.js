import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('journeys', function() {
    this.route('show', {path: '/:journey_id'});
  });
  this.route('contact');
  this.route('about');
});

export default Router;
