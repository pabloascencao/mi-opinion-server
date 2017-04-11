/**
 * Posts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  types: {
    size: function() {
       return true;
    }
  },
  attributes: {
    id: {type: 'integer', unique: true, primaryKey: true, autoIncrement: true},
    img: 'string',
    title: {type: 'string',maxLength: 80},
    description: {type: 'string',maxLength: 250},
    value: 'string',
    opinions: {
      collection: 'Opinion'
    }
  }
};
