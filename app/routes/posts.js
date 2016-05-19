import Ember from 'ember';

// app/routes/posts.js
export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  }
});